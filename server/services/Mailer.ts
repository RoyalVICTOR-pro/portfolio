import Mailgun from 'mailgun.js'
import formData from 'form-data'

interface EmailData {
  name: string
  email: string
  phone?: string
  message: string
}

export class MailerService {
  private mailgun: any
  private domain: string

  constructor() {
    this.mailgun = new Mailgun(formData).client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY as string,
    })
    this.domain = process.env.MAILGUN_DOMAIN as string
  }

  async sendContactEmail(data: EmailData): Promise<boolean> {
    try {
      const messageData = {
        from: process.env.SENDER_EMAIL as string,
        to: process.env.RECEIVER_EMAIL as string,
        subject: 'Nouveau Contact du Portfolio',
        text: this.formatContactMessage(data),
      }

      await this.mailgun.messages.create(this.domain, messageData)
      return true
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error)
      throw new Error("Une erreur est survenue lors de l'envoi du message.")
    }
  }

  private formatContactMessage(data: EmailData): string {
    return `
      Nom: ${data.name}
      Email: ${data.email}
      Téléphone: ${data.phone || 'Non renseigné'}
      Message: ${data.message}
    `
  }
}

// Export une instance unique du service
export const mailerService = new MailerService()
