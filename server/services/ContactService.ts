import IContactData from '../interfaces/IContactData'
import { mailer } from '../utils/Mailer'
import { insertData } from '../utils/Supabase'
import { contactSchema, type ContactData } from '~/schemas/contact.schema'

export class ContactService {
  async newContact(data: IContactData) {
    try {
      const validatedData = contactSchema.parse(data)

      const emailText = this.formatContactMessage(validatedData)

      await mailer.sendEmail({
        subject: 'Nouveau Contact du Portfolio',
        text: emailText,
      })

      await insertData<ContactData>('contacts', validatedData)
    } catch (error) {
      console.error('Erreur dans ContactService:', error)
      throw error
    }
  }

  private formatContactMessage(data: ContactData): string {
    return `
      Nom: ${data.name}
      Email: ${data.email}
      Téléphone: ${data.phone ?? 'Non renseigné'}
      Message: ${data.message}
    `
  }
}

export const contactService = new ContactService()
