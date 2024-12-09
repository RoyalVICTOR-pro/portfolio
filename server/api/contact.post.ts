import { contactSchema } from '~/schemas/contact.schema'
import { contactService } from '../services/ContactService'

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

    await contactService.newContact(validationResult.data)

    return {
      success: true,
      status: 200,
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
