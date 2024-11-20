import Mailgun from 'mailgun.js'
import formData from 'form-data'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY as string,
    })

    const messageData = {
      from: 'royal.victor.pro@gmail.com',
      to: 'royal.victor.pro@gmail.com',
      subject: 'Nouveau Contact du Portfolio',
      text: `
        Nom: ${body.name}
        Email: ${body.email}
        Téléphone: ${body.phone || 'Non renseigné'}
        Message: ${body.message}
      `,
    }

    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, messageData)

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error)
    throw createError({
      statusCode: 500,
      message: "Une erreur est survenue lors de l'envoi du message.",
    })
  }
})
