import Mailgun from 'mailgun.js'
import formData from 'form-data'
import IEmailOptions from '../interfaces/IEmailOptions'

export class Mailer {
  private mailgun: any
  private domain: string
  private defaultRecipient: string

  constructor() {
    const config = useRuntimeConfig()
    console.log('Création du client Mailgun')
    console.log('Clé:', config.receiverEmail)

    this.mailgun = new Mailgun(formData).client({
      username: 'api',
      key: config.mailerKey,
    })
    this.domain = config.mailerDomain
    this.defaultRecipient = config.receiverEmail
  }

  async sendEmail(options: IEmailOptions): Promise<boolean> {
    try {
      const config = useRuntimeConfig()
      const messageData = {
        from: config.senderEmail,
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
