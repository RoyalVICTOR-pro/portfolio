<template>
  <Button
    variant="ghost"
    class="text-accent hover:bg-primary/20 hover:text-primary button-icon-large px-2 py-2"
  >
    <NuxtLink :to="url" target="_blank">
      <slot />
    </NuxtLink>
  </Button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  url: string
}>()
</script>

<style></style>
