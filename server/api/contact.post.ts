import { contactSchema } from '~/schemas/contact.schema'
import { ContactService } from '../services/ContactService'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Données invalides',
          details: validationResult.error.errors,
        },
        status: 422,
      }
    }

    const config = useRuntimeConfig()
    const mailerDomain1 = useRuntimeConfig().mailerDomain
    const mailerDomain2 = useRuntimeConfig(event).mailerDomain
    const mailerDomain3 = process.env.NUXT_MAILGUN_DOMAIN
    const mailerDomain4 = config.mailerDomain
    const mailerDomain5 = config.mailgunDomain

    const contactService = new ContactService()
    await contactService.init(event)
    await contactService.newContact(validationResult.data)

    return {
      success: true,
      status: 200,
      message: `
      Mailer Domain 1: ${mailerDomain1}
      Mailer Domain 2: ${mailerDomain2}
      Mailer Domain 3: ${mailerDomain3}
      Mailer Domain 4: ${mailerDomain4}
      Mailer Domain 5: ${mailerDomain5}`,
    }
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error)

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'envoi du message",
      },
      status: 500,
    }
  }
})
