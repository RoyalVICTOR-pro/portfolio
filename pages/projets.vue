<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="font-heading md:mt-28 text-center text-2xl mb-12">
      Voici une sélection de projets parmi les +500 projets auxquels j'ai
      participé dans divers secteurs
    </h1>

    <div class="flex justify-center gap-4 mb-12">
      <Button
        variant="outline"
        :class="[!selectedTag ? 'bg-gradient-primary text-white' : '']"
        class="border-secondary"
        @click="selectTag(null)"
      >
        Tous les projets
      </Button>
      <Button
        v-for="tag in availableTags"
        :key="tag"
        :variant="selectedTag === tag ? 'default' : 'outline'"
        :class="[selectedTag === tag ? 'bg-gradient-primary text-white' : '']"
        class="border-secondary"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </Button>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-2 gap-y-12 max-w-7xl mx-auto mb-28"
    >
      <Achievement
        v-for="project in filteredProjects"
        :key="project.id"
        v-bind="project"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { filteredProjects, selectedTag, availableTags, selectTag } =
  useProjects()
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
