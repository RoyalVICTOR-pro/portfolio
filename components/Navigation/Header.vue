<template>
  <div class="flex flex-row w-full justify-between h-16 items-center mb-24">
    <!--     <div class="w-24"></div> -->
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
</template>

<script lang="ts" setup>
const buttonHoverColor = {
  variant: {
    ghost: 'hover:bg-red-950 disabled:bg-transparent dark:hover:bg-red-950',
  },
}
</script>

<style></style>
