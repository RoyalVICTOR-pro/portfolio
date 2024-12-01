<template>
  <ul :class="className">
    <li v-for="item in navigationItems" :key="item.label">
      <NuxtLink
        :to="item.href"
        :class="{ 'text-gradient-primary': cleanedPath === item.href }"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const route = useRoute()
const isMobile = useIsMobile()
const emit = defineEmits(['closeMenu'])

defineProps<{
  className?: string
}>()

const navigationItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projets' },
  { label: 'Recommandations', href: '/recommandations' },
  { label: 'Perso', href: '/perso' },
  { label: 'Contact', href: '/contact' },
]

const cleanedPath = computed(() => {
  if (route.path.length > 1 && route.path.endsWith('/')) {
    return route.path.slice(0, -1)
  }
  return route.path
})

const closeMobileMenu = () => {
  if (isMobile.value) {
    emit('closeMenu')
  }
}
</script>
