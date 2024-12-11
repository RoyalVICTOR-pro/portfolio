import { contactSchema } from '~/schemas/contact.schema'
import { ContactService } from '../services/ContactService'

export default defineEventHandler(async (event) => {
  console.log('Début du handler')
  try {
    console.log('Nouveau message de contact reçu:', event)

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
    console.log('Données validées:', validationResult.data)

    const config = useRuntimeConfig(event)
    const mailerDomain1 = config.mailerDomain
    const mailerDomain2 = process.env.NUXT_MAILGUN_DOMAIN

    const contactService = new ContactService(event)
    // await contactService.newContact(validationResult.data)

    return {
      success: true,
      status: 200,
      message: `
      Mailer Domain 1: ${mailerDomain1}
      Mailer Domain 2: ${mailerDomain2}`,
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
            : "Une erreur est survenue lors de l'envoi du message " + error,
      },
      status: 500,
    }
  }
})
