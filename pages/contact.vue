<template>
  <h1 class="font-heading md:mt-28 mb-12 text-center text-2xl">
    N'hésitez pas à me contacter !
  </h1>

  <div
    v-if="submitStatus.success"
    class="text-center space-y-4 mb-28 md:w-1/2 mx-auto"
  >
    <h2
      class="text-xl font-semibold bg-green-300 text-green-900 p-4 rounded-md text-center"
    >
      Message envoyé avec succès !
    </h2>
    <p>
      Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.
    </p>
    <Button @click="resetForm" class="mt-4">
      Envoyer un nouveau message
    </Button>
  </div>

  <form v-else @submit="onSubmit" class="space-y-8 mb-28 md:w-1/2 mx-auto">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel
          >Vos nom et prénom <span class="text-red-500">*</span></FormLabel
        >
        <FormControl>
          <Input
            type="text"
            placeholder="John Snow"
            v-bind="componentField"
            class="input-style"
            required
          />
        </FormControl>
        <FormMessage class="text-accent" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Votre email <span class="text-red-500">*</span></FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="john.snow@extern.winterfell.com"
            v-bind="componentField"
            class="input-style"
            required
          />
        </FormControl>
        <FormMessage class="text-accent" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel>Votre numéro de téléphone</FormLabel>
        <FormControl>
          <Input
            type="tel"
            placeholder="06 12 34 56 78"
            v-bind="componentField"
            class="input-style"
          />
        </FormControl>
        <FormMessage class="text-accent" />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="message">
      <FormItem>
        <FormLabel>Votre message <span class="text-red-500">*</span></FormLabel>
        <FormControl>
          <Textarea
            placeholder="Votre message ici..."
            v-bind="componentField"
            class="min-h-[120px] input-style"
            required
          />
        </FormControl>
        <FormMessage class="text-accent" />
      </FormItem>
    </FormField>

    <p v-if="submitStatus.error" class="text-red-500 text-center">
      {{ submitStatus.error }}
    </p>

    <Button
      type="submit"
      class="w-full mt-12 bg-gradient-primary"
      :disabled="submitStatus.loading"
    >
      {{ submitStatus.loading ? 'Envoi en cours...' : 'Envoyer' }}
    </Button>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z
      .string()
      .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
        message: 'Numéro invalide',
      })
      .optional(),
    message: z.string().min(10),
  })
)

const submitStatus = ref({
  loading: false,
  success: false,
  error: '',
})

const form = useForm({
  validationSchema: formSchema,
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

const onSubmit = form.handleSubmit(async (values) => {
  submitStatus.value.loading = true
  submitStatus.value.error = ''

  try {
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: values,
    })

    if (error.value) {
      throw new Error(error.value?.data?.message || 'Une erreur est survenue')
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
})
</script>

<style scoped lang="scss">
.input-style {
  @apply border-foreground/40;

  &::placeholder {
    @apply text-foreground/40;
  }
}
</style>
