<template>
  <div class="w-full">
    <!-- <Background /> -->
    <NavigationHeader ref="header" />
    <main class="w-full md:max-w-7xl mx-auto pt-16">
      <slot />
    </main>
    <!-- Tout le temps sauf dans la page /contact -->
    <CallToAction
      class="md:max-w-7xl mx-auto"
      v-if="route.path !== '/contact'"
    />
    <NavigationFooter />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const route = useRoute()

onBeforeMount(() => {
  const savedMode = useCookie('color-mode').value

  if (!savedMode) {
    colorMode.preference = 'dark'
    colorMode.value = 'dark'
  } else {
    colorMode.preference = savedMode
    colorMode.value = savedMode
  }
})

/* watch(
  () => colorMode.value,
  (newValue) => {
    const colorModeCookie = useCookie('color-mode')
    colorModeCookie.value = newValue
  }
) */

const header = ref(null)

onMounted(() => {
  const handleScroll = () => {
    if (header.value) {
      header.value.isScrolled = window.scrollY > 30
    }
  }

  window.addEventListener('scroll', handleScroll)

  // N'oubliez pas de nettoyer l'écouteur d'événements
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.icon-button {
  @apply hover:bg-primary/25 disabled:bg-transparent dark:hover:bg-primary/25;
}
</style>
