<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-background/80 backdrop-blur-md shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div
      class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-10': isScrolled }"
    ></div>
    <div class="relative z-10 w-full">
      <div
        class="flex flex-row max-w-7xl mx-auto justify-between h-16 items-center"
      >
        <div class="flex flex-row h-full space-x-2 items-center">
          <Available />
          <ColorModeButton />
        </div>
        <div class="">
          <nav>
            <ul class="flex flex-row space-x-6">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">Recommandations</a></li>
              <li><a href="#">Perso</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="mr-2">
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
    </div>
  </header>
</template>

<script lang="ts" setup>
const isScrolled = ref(false)

// Exposez isScrolled pour qu'il puisse être mis à jour depuis le parent
defineExpose({ isScrolled })
</script>

<style></style>
