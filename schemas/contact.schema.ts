import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères')
    .regex(
      /^[a-zA-ZÀ-ÿ\s-']+$/,
      'Le nom contient des caractères non autorisés'
    ),
  email: z
    .string()
    .trim()
    .email("L'email n'est pas valide")
    .max(255, "L'email ne peut pas dépasser 255 caractères")
    .transform((val) => val.toLowerCase()),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Le format du numéro de téléphone n'est pas valide"
    )
    .transform((val) => val.replace(/\s+/g, ' ').trim())
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères')
    .transform((val) => val.replace(/<[^>]*>/g, '')),
})

export type ContactData = z.infer<typeof contactSchema>
