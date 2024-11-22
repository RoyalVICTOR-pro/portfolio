<template>
  <NuxtLink :to="url" :target="target">
    <Button
      variant="ghost"
      class="text-accent hover:bg-primary/20 hover:text-primary button-icon-large px-2 py-2"
    >
      <slot />
    </Button>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  url: string
  target?: string
}>()
</script>

<style></style>
