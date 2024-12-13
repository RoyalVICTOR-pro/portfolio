<template>
  <form @submit="onSubmit" class="mb-28 md:w-1/2 md:mx-auto mx-2">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem class="form-field">
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
      <FormItem class="form-field">
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
      <FormItem class="form-field">
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
      <FormItem class="form-field">
        <FormLabel>Votre message <span class="text-red-500">*</span></FormLabel>
        <FormControl>
          <Textarea
            placeholder="Votre message ici..."
            v-bind="componentField"
            class="min-h-[240px] md:min-h-[120px] input-style"
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
      class="w-full text-md mt-12 bg-gradient-primary text-white"
      :disabled="submitStatus.loading"
    >
      {{ submitStatus.loading ? 'Envoi en cours...' : 'Envoyer' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
const { form, submitStatus, submitForm } = useContactForm()

const onSubmit = form.handleSubmit(async (values) => {
  await submitForm(values)
})
</script>

<style scoped>
.input-style {
  @apply border-foreground/40;
}

.input-style::placeholder {
  @apply text-foreground/40;
}

.form-field {
  @apply mb-8;
}
</style>
