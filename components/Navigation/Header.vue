<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 group backdrop-blur-xl"
  >
    <div
      class="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
      :class="{ 'opacity-10': isScrolled }"
    ></div>
    <div class="relative z-10 w-full">
      <div
        class="flex flex-row max-w-7xl mx-auto justify-between h-16 items-center"
      >
        <div>
          <Available />
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
    </div>
  </header>
</template>

<script lang="ts" setup>
const isScrolled = ref(false)

// Exposez isScrolled pour qu'il puisse être mis à jour depuis le parent
defineExpose({ isScrolled })

const buttonHoverColor = {
  variant: {
    ghost: 'hover:bg-red-950 disabled:bg-transparent dark:hover:bg-red-950',
  },
}
</script>

<style></style>
