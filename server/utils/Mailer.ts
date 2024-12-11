import Mailgun from 'mailgun.js'
import formData from 'form-data'
import IEmailOptions from '../interfaces/IEmailOptions'

export class Mailer {
  private mailgun: any
  private domain: string
  private defaultRecipient: string
  private config: any

  constructor() {
    this.config = useRuntimeConfig()
    console.log('Config:', this.config.mailerKey)
    console.log('Env:', this.config.mailerDomain)
    console.log('Env:', this.config.senderEmail)
    console.log('Env:', this.config.receiverEmail)
    this.mailgun = new Mailgun(formData).client({
      username: 'api',
      key: this.config.mailerKey as string,
    })
    this.domain = this.config.mailerDomain as string
    this.defaultRecipient = this.config.receiverEmail as string
  }

  async sendEmail(options: IEmailOptions): Promise<boolean> {
    try {
      const messageData = {
        from: this.config.senderEmail as string,
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
