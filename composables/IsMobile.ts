import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

export const useIsMobile = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = ref(true) // On part du principe que c'est mobile par défaut

  onMounted(() => {
    // On met à jour la valeur initiale
    isMobile.value = breakpoints.smaller('md').value

    // On observe les changements
    watch(breakpoints.smaller('md'), (value) => {
      isMobile.value = value
    })
  })

  return {
    isMobile: readonly(isMobile),
  }
}
