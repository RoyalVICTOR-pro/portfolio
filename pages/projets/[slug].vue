<template>
  <div v-if="currentAskedProject" class="container mx-auto px-4 py-8">
    <h1 class="font-heading md:mt-28 text-center text-4xl mb-12">
      {{ currentAskedProject.title }}
    </h1>
    <p class="text-2xl mb-12 text-center">
      {{ currentAskedProject.description_projet }}
    </p>
    <div class="flex flex-row justify-between items-center mb-8">
      <NuxtLink to="/projets" v-if="!isMobile">
        <Button class="bg-gradient-primary text-white hover:bg-gradient-accent">
          <&nbsp;&nbsp;&nbsp;Retour
        </Button>
      </NuxtLink>
      <div class="tags flex flex-row md:items-center">
        <span
          v-for="tag in currentAskedProject.tags"
          :key="tag"
          class="tag mr-2 mb-2 md:mb-0"
          >{{ tag }}</span
        >
      </div>
      <h3>{{ currentAskedProject.date }}</h3>
    </div>
    <NuxtImg
      :src="currentAskedProject.mainImage"
      :alt="currentAskedProject.title"
      class="w-full"
    />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24 mb-24">
      <Card class="border-secondary">
        <CardHeader>
          <CardTitle>Contexte Client</CardTitle>
        </CardHeader>
        <CardContent>
          <p v-html="currentAskedProject.contexte_client" />
        </CardContent>
      </Card>
      <Card class="border-secondary">
        <CardHeader>
          <CardTitle>Tâches réalisées</CardTitle>
        </CardHeader>
        <CardContent>
          <p v-html="currentAskedProject.taches_realisees" />
        </CardContent>
      </Card>
      <Card class="border-secondary">
        <CardHeader>
          <CardTitle>Stack technique</CardTitle>
        </CardHeader>
        <CardContent>
          <p v-html="currentAskedProject.stack_technique" />
        </CardContent>
      </Card>
      <Card class="border-secondary">
        <CardHeader>
          <CardTitle>Contexte professionnel</CardTitle>
        </CardHeader>
        <CardContent>
          <p v-html="currentAskedProject.contexte_professionnel" />
        </CardContent>
      </Card>
    </div>
    <div class="" v-if="currentAskedProject.moreImages">
      <ScrollReveal
        v-for="image in currentAskedProject.moreImages"
        :key="image"
        class="mb-12"
      >
        <NuxtImg :src="image" :alt="currentAskedProject.title" class="w-full" />
      </ScrollReveal>
    </div>
    <NuxtLink to="/projets" v-if="!isMobile">
      <Button class="bg-gradient-primary text-white hover:bg-gradient-accent">
        <&nbsp;&nbsp;&nbsp;Retour
      </Button>
    </NuxtLink>
    <div v-if="isMobile" class="fixed bottom-4 left-4 z-50">
      <NuxtLink to="/projets">
        <div class="bg-gradient-primary p-2 text-white rounded-sm">
          <IconChevronDown class="rotate-90" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/stores/Projects'

const route = useRoute()
const store = useProjectsStore()
const isMobile = useIsMobile()

const currentAskedProject = store.getProjectById(route.params.slug as string)

if (!currentAskedProject) {
  navigateTo('/projets')
}

if (currentAskedProject) {
  useHead({
    title: currentAskedProject.title,
    meta: [
      {
        name: 'description',
        content: currentAskedProject.description,
      },
    ],
  })
}
</script>

<style scoped>
.tag {
  background-color: #eee;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  color: #121212;
}
</style>
