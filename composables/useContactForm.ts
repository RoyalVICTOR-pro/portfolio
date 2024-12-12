import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactSchema } from '~/schemas/contact.schema'
import type TContactData from '~/types/TContactData'
import type TSubmitStatus from '~/types/TSubmitStatus'
import type TContactApiResponse from '~/types/TContactApiResponse'
import type TValidationError from '~/types/TValidationError'
// import type IGenericApiResponse from '~/server/interfaces/IGenericApiResponse'

const submitStatus = ref<TSubmitStatus>({
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
    resetSubmitStatus()
  }

  const submitForm = async (values: TContactData) => {
    resetSubmitStatus()
    submitStatus.value.loading = true

    const config = useRuntimeConfig()

    try {
      const { data, error } = await useFetch<TContactApiResponse>(
        config.public.apiUrl + '/contacts',
        {
          method: 'POST',
          body: values,
          // Cela est important pour pouvoir accéder aux données de la réponse
          onResponseError({ response }) {
            return response._data
          },
        }
      )

      if (error.value) {
        const errorData = error.value.data as TContactApiResponse

        if (errorData?.type === 'validation' && errorData.errors) {
          errorData.errors.forEach((error: TValidationError) => {
            submitStatus.value.validationErrors[error.field] = error.message

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
