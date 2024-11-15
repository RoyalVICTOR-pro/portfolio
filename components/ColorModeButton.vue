<template>
  <Switch
    :checked="value"
    class="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary h-7 data-[state=unchecked]:p-0.5"
    @update:checked="toggleColorMode"
  >
    <template #thumb>
      <IconSun
        v-if="isDark"
        class="w-4 h-4 stroke-accent fill-accent ml-0.5 mt-0.5"
      />
      <IconMoon
        v-else
        class="w-4 h-4 stroke-accent fill-accent ml-0.5 mt-0.5"
      />
    </template>
  </Switch>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value) => {
    colorMode.preference = value ? 'dark' : 'light'
    colorMode.value = value ? 'dark' : 'light'
  },
})

const toggleColorMode = (value) => {
  console.log(value)
  const newMode = value ? 'dark' : 'light'
  colorMode.preference = newMode
  colorMode.value = newMode

  // Sauvegarder la préférence dans un cookie
  const colorModeCookie = useCookie('color-mode')
  colorModeCookie.value = newMode
}
</script>
