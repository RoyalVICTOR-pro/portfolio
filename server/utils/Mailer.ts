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
    const config = useRuntimeConfig(event)
    const mailgunApiKey = config.mailerKey
    const mailgunDomain = config.mailerDomain
    const receiverEmail = config.receiverEmail
    this.senderEmail = config.senderEmail

    const mg = new Mailgun(formData)
    this.mailgun = mg.client({
      username: 'api',
      key: mailgunApiKey,
    })

    this.domain = mailgunDomain
    this.defaultRecipient = receiverEmail
  }

  async sendEmail(options: IEmailOptions): Promise<boolean> {
    if (!this.mailgun || !this.domain) {
      throw new Error('Mailgun client not initialized. Call init() first.')
    }

    try {
      const messageData = {
        from: this.senderEmail,
        to: options.to || this.defaultRecipient,
        subject: options.subject,
        text: options.text,
      }

      const result = await this.mailgun.messages.create(
        this.domain,
        messageData
      )
      return true
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error)
      console.log('Domain:', this.domain)
      console.log('Recipient:', this.defaultRecipient)
      console.log('Sender:', this.senderEmail)
      throw error
    }
  }
}
