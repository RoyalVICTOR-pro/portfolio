import Mailgun from 'mailgun.js'
import formData from 'form-data'
import IEmailOptions from '../interfaces/IEmailOptions'

export class Mailer {
  private mailgun: any
  private domain: string | undefined
  private defaultRecipient: string | undefined
  private senderEmail: string | undefined

  constructor() {}

  async init(event: any) {
    const mailgunApiKey = useRuntimeConfig(event).mailerKey
    const mailgunDomain = useRuntimeConfig(event).mailerDomain
    const receiverEmail = useRuntimeConfig(event).receiverEmail
    this.senderEmail = useRuntimeConfig(event).senderEmail

    this.mailgun = new Mailgun(formData).client({
      username: 'api',
      key: mailgunApiKey as string,
    })
    this.domain = mailgunDomain as string
    this.defaultRecipient = receiverEmail as string
  }

  async sendEmail(options: IEmailOptions): Promise<boolean> {
    try {
      const messageData = {
        from: this.senderEmail,
        to: options.to || this.defaultRecipient,
        subject: options.subject,
        text: options.text,
      }

      await this.mailgun.messages.create(this.domain, messageData)
      return true
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error)
      console.log('this.domain', this.domain)
      console.log('this.defaultRecipient', this.defaultRecipient)
      console.log('this.senderEmail', this.senderEmail)
      throw new Error("Une erreur est survenue lors de l'envoi du message.")
    }
  }
}
