<template>
  <ul :class="className">
    <li v-for="item in navigationItems" :key="item.label">
      <NuxtLink
        :to="item.href"
        :class="{ 'text-gradient-primary': route.path === item.href }"
      >
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const route = useRoute()

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
</script>
