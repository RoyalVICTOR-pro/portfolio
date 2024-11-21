import { mailerService } from '../services/Mailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    await mailerService.sendContactEmail(body)
    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error)
    throw createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi du message.",
    })
  }
})
