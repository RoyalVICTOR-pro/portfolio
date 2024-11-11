export const useScrollListener = (callback: any) => {
  onMounted(() => {
    window.addEventListener('scroll', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', callback)
  })
}
