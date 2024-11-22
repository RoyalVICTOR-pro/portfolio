<template>
  <CarouselItem>
    <div class="p-1">
      <Card class="border-secondary">
        <CardContent
          class="flex flex-col aspect-square items-center justify-center p-6"
        >
          <slot />
          <NuxtLink :to="url">
            <Button class="mt-4 bg-secondary text-foreground hover:text-white">
              Lire toute la recommandation
            </Button>
          </NuxtLink>
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
