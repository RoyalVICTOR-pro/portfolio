<template>
  <div ref="elementRef" :class="{ 'scroll-reveal-visible': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.2,
    }
  )

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})
</script>

<style scoped>
div {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.6s ease-out;
}

.scroll-reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
