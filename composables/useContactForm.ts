import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactSchema } from '~/schemas/contact.schema'
import type IContactData from '~/server/interfaces/IContactData'
import type ISubmitStatus from '~/server/interfaces/ISubmitStatus'
import type IGenericApiResponse from '~/server/interfaces/IGenericApiResponse'

const submitStatus = ref<ISubmitStatus>({
  loading: false,
  success: false,
  error: '',
})

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
    }
  }

  const submitForm = async (values: IContactData) => {
    submitStatus.value.loading = true
    submitStatus.value.error = ''

    try {
      const { data } = await useFetch<IGenericApiResponse>('/api/contact', {
        method: 'POST',
        body: values,
      })

      if (!data.value?.success) {
        if (data.value?.error?.code === 'VALIDATION_ERROR') {
          const validationErrors =
            data.value.error.details?.map((err) => err.message).join('\n') ?? ''
          submitStatus.value.error = validationErrors

          data.value.error.details?.forEach((err) => {
            const fieldName = err.path[0] as keyof IContactData
            form.setFieldError(fieldName, err.message)
          })
          return
        }
        submitStatus.value.error =
          data.value?.error?.message || 'Une erreur est survenue'
        return
      }

      submitStatus.value.success = true
    } catch (e) {
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
