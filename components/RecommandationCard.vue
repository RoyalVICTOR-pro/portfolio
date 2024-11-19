<template>
  <div :id="anchor"></div>
  <Card class="border-secondary mt-12">
    <CardHeader>
      <CardTitle>{{ name }}</CardTitle>
      <CardDescription class="text-accent">{{ position }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div v-html="text" />
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  anchor: string
  name: string
  position: string
  text: string
}>()
</script>

<style></style>
