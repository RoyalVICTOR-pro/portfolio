// import { contactSchema } from '~/schemas/contact.schema'
// import { contactService } from '../services/ContactService'

export default defineEventHandler(async (event) => {
  console.log('Test minimal')
  return { success: true }

  // console.log('Début du handler')
  // try {
  //   const rawBody = await readRawBody(event)
  //   console.log('Raw body:', rawBody)
  //   const body = await readBody(event)
  //   console.log('Parsed body:', body)
  //   // ... reste du code
  // } catch (error) {
  //   console.error('Erreur détaillée:', {
  //     name: error.name,
  //     message: error.message,
  //     stack: error.stack,
  //   })
  // }
  // try {
  //   console.log('Nouveau message de contact reçu:', event)

  //   const body = await readBody(event)
  //   const validationResult = contactSchema.safeParse(body)

  //   if (!validationResult.success) {
  //     return {
  //       success: false,
  //       error: {
  //         code: 'VALIDATION_ERROR',
  //         message: 'Données invalides',
  //         details: validationResult.error.errors,
  //       },
  //       status: 422,
  //     }
  //   }
  //   console.log('Données validées:', validationResult.data)

  //   await contactService.newContact(validationResult.data)

  //   return {
  //     success: true,
  //     status: 200,
  //   }
  // } catch (error) {
  //   console.error('Erreur lors du traitement de la requête:', error)

  //   return {
  //     success: false,
  //     error: {
  //       code: 'INTERNAL_ERROR',
  //       message:
  //         error instanceof Error
  //           ? error.message
  //           : "Une erreur est survenue lors de l'envoi du message",
  //     },
  //     status: 500,
  //   }
  // }
})
