import { contactSchema, type ContactData } from '~/schemas/contact.schema'
import { contactService } from '../services/ContactService'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      throw createError({
        statusCode: 400,
        message: 'Données invalides',
        data: validationResult.error.errors,
      })
    }

    await contactService.newContact(validationResult.data)
    return { success: true }
  } catch (error) {
    console.error('Erreur lors du traitement de la requête:', error)

    if (error && typeof error === 'object' && 'statusCode' in error) {
      if (error.statusCode === 400) {
        throw error
      }
    }

    throw createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi du message.",
    })
  }
})
