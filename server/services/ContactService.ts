import IContactData from '../interfaces/IContactData'
import { Mailer } from '../utils/Mailer'
import { createSupabaseClient, insertData } from '../utils/Supabase'
import { contactSchema, type ContactData } from '~/schemas/contact.schema'

export class ContactService {
  private mailer: Mailer
  private supabase: any

  constructor(event: any) {
    this.mailer = new Mailer(event)
    this.supabase = createSupabaseClient(event)
  }

  async newContact(data: IContactData) {
    console.log('ContactService appelé avec:', data)
    try {
      const validatedData = contactSchema.parse(data)

      const emailText = this.formatContactMessage(validatedData)

      console.log("Envoi de l'email:", emailText)
      await this.mailer.sendEmail({
        subject: 'Nouveau Contact du Portfolio',
        text: emailText,
      })
      console.log('Email envoyé')

      console.log('Enregistrement des données dans la base de données')
      await insertData<ContactData>(this.supabase, 'contacts', validatedData)
      console.log('Données enregistrées')
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
