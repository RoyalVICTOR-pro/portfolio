<template>
  <footer class="mx-4">
    <div
      class="flex flex-row justify-between max-w-7xl mx-auto py-4 items-center"
    >
      <div>
        <p>&copy; 2024 Royal VICTOR</p>
      </div>
      <div v-if="!isMobile">
        <NavigationIconButtonsSet />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const isMobile = useIsMobile()
</script>

<style></style>
