<template>
  <h1
    v-if="!submitStatus.success"
    class="font-heading md:mt-28 mb-12 text-center text-2xl"
  >
    N'hésitez pas à me contacter !
  </h1>

  <div
    v-if="submitStatus.success"
    class="text-center space-y-28 mb-28 md:w-1/2 mx-auto"
  >
    <h2
      class="text-md font-semibold md:mt-28 mb-12 bg-green-300 text-green-900 p-2 rounded-md text-center"
    >
      Message envoyé avec succès !
    </h2>
    <p class="text-xl">
      Merci de m'avoir contacté.<br />Je vous recontacte dans les plus brefs
      délais.
    </p>
    <Button @click="resetForm" class="mt-4">
      Envoyer un nouveau message
    </Button>
  </div>

  <ContactForm v-else class="mb-28 mx-2 md:w-1/2 md:mx-auto" />
</template>

<script setup lang="ts">
useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: "N'hésitez pas à me contacter !",
    },
  ],
})

const { submitStatus, resetForm } = useContactForm()
</script>

<style scoped></style>
