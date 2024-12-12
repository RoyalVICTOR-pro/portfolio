import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactSchema } from '~/schemas/contact.schema'
import type TContactData from '~/types/TContactData'
// import type TSubmitStatus from '~/types/TSubmitStatus'
// import type IGenericApiResponse from '~/server/interfaces/IGenericApiResponse'

interface ValidationError {
  message: string
  rule: string
  field: string
  meta: Record<string, any>
}

interface SubmitStatus {
  loading: boolean
  error: string
  success: boolean
  validationErrors: Record<string, string>
}

// Typage de la réponse API
interface ApiResponse {
  status: 'success' | 'error'
  type?: 'validation' | 'server'
  message?: string
  errors?: ValidationError[]
}

const submitStatus = ref<SubmitStatus>({
  loading: false,
  error: '',
  success: false,
  validationErrors: {},
})

const resetSubmitStatus = () => {
  submitStatus.value = {
    loading: false,
    error: '',
    success: false,
    validationErrors: {},
  }
}

export function useContactForm() {
  const form = useForm({
    validationSchema: toTypedSchema(contactSchema),
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const resetForm = () => {
    form.resetForm()
    submitStatus.value = {
      loading: false,
      success: false,
      error: '',
      validationErrors: {},
    }
  }

  const submitForm = async (values: TContactData) => {
    resetSubmitStatus()
    submitStatus.value.loading = true

    const config = useRuntimeConfig()

    try {
      // Notez que nous utilisons des options supplémentaires pour useFetch
      const { data, error } = await useFetch<ApiResponse>(
        config.public.apiUrl + '/contacts',
        {
          method: 'POST',
          body: values,
          // Cette option est importante pour que nous puissions accéder aux erreurs de validation
          onResponseError({ response }) {
            return response._data
          },
        }
      )

      // Si nous avons une réponse avec des erreurs de validation (code 422)
      if (error.value) {
        const errorData = error.value.data as ApiResponse

        if (errorData?.type === 'validation' && errorData.errors) {
          // Transformation du tableau d'erreurs en un objet pour un accès plus facile
          errorData.errors.forEach((error: ValidationError) => {
            submitStatus.value.validationErrors[error.field] = error.message

            // Si vous utilisez un gestionnaire de formulaire comme vee-validate ou formkit
            if (form.setFieldError) {
              form.setFieldError(
                error.field as keyof TContactData,
                error.message
              )
            }
          })
          return
        }

        // Pour les autres types d'erreurs
        submitStatus.value.error =
          errorData?.message ||
          "Une erreur est survenue lors de l'envoi du message"
        return
      }

      // En cas de succès
      if (data.value?.status === 'success') {
        submitStatus.value.success = true
        // Réinitialisation du formulaire si nécessaire
        if (form.resetForm) {
          form.resetForm()
        }
      }
    } catch (e) {
      console.error('Form submission error:', e)
      submitStatus.value.error =
        e instanceof Error
          ? e.message
          : "Une erreur est survenue lors de l'envoi du message"
    } finally {
      submitStatus.value.loading = false
    }
  }

  return {
    form,
    submitStatus,
    resetForm,
    submitForm,
  }
}
