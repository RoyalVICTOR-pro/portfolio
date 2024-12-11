import IContactData from '../interfaces/IContactData'
import { Mailer } from '../utils/Mailer'
// import { createSupabaseClient, insertData } from '../utils/Supabase'
import { contactSchema, type ContactData } from '~/schemas/contact.schema'

export class ContactService {
  private mailer: Mailer | undefined
  private supabase: any

  constructor(event: any) {
    this.mailer = new Mailer(event)
  }

  async init(event: any) {
    // await this.mailer.init()
    // this.supabase = createSupabaseClient(event)
  }

  async newContact(data: IContactData) {
    try {
      const validatedData = contactSchema.parse(data)

      const emailText = this.formatContactMessage(validatedData)

      const response = await this.mailer?.sendEmail({
        subject: 'Nouveau Contact du Portfolio',
        text: emailText,
      })

      return response

      // await insertData<ContactData>(this.supabase, 'contacts', validatedData)
    } catch (error) {
      return 'Erreur dans ContactService : ' + JSON.stringify(error) //
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
