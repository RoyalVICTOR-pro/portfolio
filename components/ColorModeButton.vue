<template>
  <NavigationIconButton @click="toggleColorMode">
    <IconSun
      v-if="isDark"
      class="pr-0.5 pt-0.5 w-5 h-5 stroke-foreground fill-foreground"
    />
    <IconMoon
      v-else
      class="pl-0.5 pt-0.5 w-4 h-4 stroke-foreground fill-foreground"
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
