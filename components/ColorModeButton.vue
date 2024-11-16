<template>
  <NavigationIconButton @click="toggleColorMode">
    <IconSun v-if="isDark" class="!w-6 !h-6 fill-foreground" />
    <IconMoon
      v-else
      class="pt-0.5 !w-5 !h-5 stroke-foreground fill-foreground"
    />
  </NavigationIconButton>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleColorMode = () => {
  const newMode = isDark.value ? 'light' : 'dark'
  colorMode.preference = newMode
  colorMode.value = newMode

  // Sauvegarder la préférence dans un cookie
  const colorModeCookie = useCookie('color-mode')
  colorModeCookie.value = newMode
}
</script>
