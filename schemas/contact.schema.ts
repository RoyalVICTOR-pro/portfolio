import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.string().email("L'email n'est pas valide"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Le format du numéro de téléphone n'est pas valide"
    )
    .optional(),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
})

export type ContactData = z.infer<typeof contactSchema>
