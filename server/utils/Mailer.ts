import Mailgun from 'mailgun.js'
import formData from 'form-data'
import IEmailOptions from '../interfaces/IEmailOptions'

export class Mailer {
  private mailgun: any
  private domain: string
  private defaultRecipient: string
  private senderEmail: string

  constructor(event: any) {
    const mailgunApiKey = useRuntimeConfig(event).mailerKey
    const mailgunDomain = useRuntimeConfig(event).mailerDomain
    const receiverEmail = useRuntimeConfig(event).receiverEmail
    this.senderEmail = useRuntimeConfig(event).senderEmail

    console.log('Configuration Mailer:', mailgunApiKey)

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
        from: this.senderEmail as string,
        to: options.to || this.defaultRecipient,
        subject: options.subject,
        text: options.text,
      }

      await this.mailgun.messages.create(this.domain, messageData)
      return true
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error)
      throw new Error("Une erreur est survenue lors de l'envoi du message.")
    }
  }
}
