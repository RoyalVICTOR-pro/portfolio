<template>
  <NuxtLayout class="w-full">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Portfolio de Royal VICTOR`
      : 'Portfolio de Royal VICTOR'
  },
})
</script>
