import IContactData from '../interfaces/IContactData'
import { mailer } from '../utils/Mailer'
import { insertData } from '../utils/Supabase'
import { contactSchema, type ContactData } from '~/schemas/contact.schema'
import { createClient } from '@supabase/supabase-js'

export class ContactService {
  async newContact(data: IContactData): Promise<boolean> {
    try {
      // Utilisation du schéma existant
      const validatedData = contactSchema.parse(data)

      // Envoi de l'email
      const emailText = this.formatContactMessage(validatedData)
      const emailSent = await mailer.sendEmail({
        subject: 'Nouveau Contact du Portfolio',
        text: emailText,
      })

      const supabase = createClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_KEY as string
      )
      // Insertion dans Supabase avec le type ContactData
      try {
        // const { data, error } = await supabase.from('contact').insert([
        //   {
        //     name: validatedData.name,
        //     email: validatedData.email,
        //     message: validatedData.message,
        //   },
        // ])

        // if (error) {
        //   console.error('Yop : ', error)
        //   throw error
        // }

        // console.log('Contact inséré avec succès:', data)
        await insertData<ContactData>('contacts', validatedData)
      } catch (error) {
        console.error("Erreur lors de l'insertion dans Supabase:", error)
        throw error
      }

      return emailSent
    } catch (error) {
      console.error('Erreur dans ContactService:', error)
      throw error
    }
  }

  private formatContactMessage(data: ContactData): string {
    return `
      Nom: ${data.name}
      Email: ${data.email}
      Téléphone: ${data.phone || 'Non renseigné'}
      Message: ${data.message}
    `
  }
}

export const contactService = new ContactService()
