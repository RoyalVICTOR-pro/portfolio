<template>
  <div class="relative h-full overflow-hidden">
    <NuxtImg
      src="images/Photo_Royal_VICTOR_A.png"
      :alt="'Image A'"
      class="w-full h-full object-contain transition-opacity duration-300"
      :class="{ 'opacity-0': isHovered && isSecondImageLoaded }"
      @load="firstImageLoaded = true"
    />
    <NuxtImg
      src="images/Photo_Royal_VICTOR_B.png"
      :alt="'Image B'"
      class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
      :class="{
        'opacity-100': isHovered && isSecondImageLoaded,
        'opacity-0': !isHovered || !isSecondImageLoaded,
      }"
      @load="secondImageLoaded = true"
    />
    <div
      class="absolute inset-0"
      @mouseenter="handleInteraction(true)"
      @mouseleave="handleInteraction(false)"
      @click="handleMobileClick"
    ></div>
  </div>
</template>

<script setup>
const firstImageLoaded = ref(false)
const secondImageLoaded = ref(false)
const isHovered = ref(false)
const isMobile = ref(false)

const isSecondImageLoaded = computed(
  () => firstImageLoaded.value && secondImageLoaded.value
)

onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
})

const handleInteraction = (hover) => {
  if (!isMobile.value) {
    isHovered.value = hover
  }
}

const handleMobileClick = () => {
  if (isMobile.value) {
    isHovered.value = !isHovered.value
  }
}
</script>
