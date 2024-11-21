import IContactData from '../interfaces/IContactData'
import { mailer } from '../utils/Mailer'

export class ContactService {
  async newContact(data: IContactData): Promise<boolean> {
    const emailText = this.formatContactMessage(data)

    return await mailer.sendEmail({
      subject: 'Nouveau Contact du Portfolio',
      text: emailText,
    })
  }

  private formatContactMessage(data: IContactData): string {
    return `
      Nom: ${data.name}
      Email: ${data.email}
      Téléphone: ${data.phone || 'Non renseigné'}
      Message: ${data.message}
    `
  }
}

export const contactService = new ContactService()
