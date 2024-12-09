import Mailgun from 'mailgun.js'
import formData from 'form-data'
import IEmailOptions from '../interfaces/IEmailOptions'

export class Mailer {
  private mailgun: any
  private domain: string
  private defaultRecipient: string

  constructor() {
    this.mailgun = new Mailgun(formData).client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY as string,
    })
    this.domain = process.env.MAILGUN_DOMAIN as string
    this.defaultRecipient = process.env.RECEIVER_EMAIL as string
  }

  async sendEmail(options: IEmailOptions): Promise<boolean> {
    try {
      const messageData = {
        from: process.env.SENDER_EMAIL as string,
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

export const mailer = new Mailer()
