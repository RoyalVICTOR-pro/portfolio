<template>
  <TooltipProvider>
    <Tooltip :delay-duration="0">
      <TooltipTrigger class="cursor-default">
        <component
          :is="resolveIcon"
          class="w-10 h-10 mb-1 mr-3 text-foreground"
        />
      </TooltipTrigger>
      <TooltipContent side="bottom" class="bg-background text-foreground">
        <p>{{ text }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script lang="ts" setup>
import IconTypescript from '@/components/Icon/Typescript.vue'
import IconVueJS from '@/components/Icon/VueJS.vue'
import IconNuxt from '@/components/Icon/Nuxt.vue'
import IconNodeJS from '@/components/Icon/NodeJS.vue'

const props = defineProps<{
  icon: string
  text: string
}>()

const iconComponents = {
  IconTypescript,
  IconVueJS,
  IconNuxt,
  IconNodeJS,
}

const resolveIcon = computed(
  () => iconComponents[props.icon as keyof typeof iconComponents]
)
</script>

<style></style>
