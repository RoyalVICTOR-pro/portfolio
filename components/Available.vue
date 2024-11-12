<template>
  <div class="mt-2">
    <Badge
      v-if="available == 'yes'"
      class="bg-green-400 text-green-950 hover:bg-green-200"
    >
      <UIcon name="i-grommet-icons-checkmark" class="mr-3" />
      Disponible
    </Badge>
    <Badge
      v-else-if="available == 'soon'"
      class="bg-yellow-400 text-yellow-950 hover:bg-yellow-200"
    >
      <UIcon name="i-grommet-icons-clock" class="mr-3" />
      Bientôt disponible
    </Badge>
    <Badge v-else class="bg-red-400 text-red-950 hover:bg-red-200">
      <UIcon name="i-grommet-icons-close" class="mr-3" />
      Indisponible
    </Badge>
  </div>
</template>

<script lang="ts" setup>
// Récupérer la variable d'environnement available pour afficher la bonne couleur
const config = useRuntimeConfig()
const available = config.public.available
console.log('available', available)
</script>

<style></style>
