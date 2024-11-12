<template>
  <div>
    <!-- <Background /> -->
    <NavigationHeader ref="header" />
    <main class="max-w-7xl mx-auto pt-48">
      <slot />
    </main>
    <Footer>
      <div class="flex flex-row justify-between max-w-7xl mx-auto py-4">
        <div>
          <p>&copy; 2024 Royal VICTOR</p>
        </div>
        <div>
          <NavigationIconButton
            url="https://www.linkedin.com/in/royal-victor-developpeur-fullstack-chef-de-projet"
          >
            <IconLinkedIn />
          </NavigationIconButton>
          <NavigationIconButton url="https://github.com/RoyalVICTOR-pro">
            <IconGithub />
          </NavigationIconButton>
          <NavigationIconButton url="mailto:royal.victor.pro@gmail.com">
            <IconMail />
          </NavigationIconButton>
        </div>
      </div>
    </Footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

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
/* body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background: linear-gradient(-45deg, #000000, #160202);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  color: #ebf4f1;
} */
/* background-color: #22262E; */

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
