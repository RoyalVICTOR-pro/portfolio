<template>
  <CarouselItem>
    <div class="p-1">
      <Card class="border-secondary">
        <CardContent
          class="flex flex-col aspect-square items-center justify-center p-6"
        >
          <slot />
          <Button class="mt-4 bg-background text-foreground hover:text-white">
            <NuxtLink :to="url"> Lire toute la recommandation </NuxtLink>
          </Button>
        </CardContent>
      </Card>
    </div>
  </CarouselItem>
</template>

<script lang="ts" setup>
const props = defineProps<{
  url: string
}>()
</script>

<style></style>
