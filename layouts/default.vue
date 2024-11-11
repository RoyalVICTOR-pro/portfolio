<template>
  <div>
    <Background />
    <NavigationHeader ref="header" />
    <main class="max-w-7xl mx-auto pt-48">
      <slot />
    </main>
    <Footer>
      <div class="flex flex-row justify-between max-w-7xl mx-auto py-4">
        <div>
          <p>&copy; 2024 Royal Victor</p>
        </div>
        <div>
          <UButton
            icon="i-grommet-icons-linkedin-option"
            size="sm"
            color="primary"
            square
            variant="ghost"
            to="https://www.linkedin.com/in/royal-victor-developpeur-fullstack-chef-de-projet"
            target="_blank"
            :ui="buttonHoverColor"
          />
          <UButton
            icon="i-grommet-icons-github"
            size="sm"
            color="primary"
            square
            variant="ghost"
            to="https://github.com/RoyalVICTOR-pro"
            target="_blank"
            :ui="buttonHoverColor"
          />
          <UButton
            icon="i-grommet-icons-mail"
            size="sm"
            color="primary"
            square
            variant="ghost"
            to="mailto:royal.victor.pro@gmail.com"
            target="_blank"
            :ui="buttonHoverColor"
          />
        </div>
      </div>
    </Footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

const header = ref(null)

const buttonHoverColor = {
  variant: {
    ghost: 'hover:bg-red-950 disabled:bg-transparent dark:hover:bg-red-950',
  },
}

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
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background: linear-gradient(-45deg, #000000, #160202);
  /* background-color: #22262E; */
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  color: #ebf4f1;
}

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
</style>
