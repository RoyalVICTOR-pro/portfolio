import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '~/data/projectsData'
import { projects, AVAILABLE_TAGS } from '~/data/projectsData'

export const useProjectsStore = defineStore('projects', () => {
  // State
  const selectedTag = ref<string | null>(null)
  const isVisible = ref(true)

  // Getters
  const filteredProjects = computed(() => {
    if (!selectedTag.value) return projects

    return projects.filter((project) =>
      project.tags.includes(selectedTag.value as string)
    )
  })

  const featuredProjects = computed(() =>
    projects.filter((project) => project.featured)
  )

  // Actions
  const selectTag = async (tag: string | null) => {
    isVisible.value = false
    await new Promise((resolve) => setTimeout(resolve, 200))
    selectedTag.value = tag
    isVisible.value = true
  }

  const resetSelection = () => {
    selectedTag.value = null
    isVisible.value = true
  }

  return {
    // State
    selectedTag,
    isVisible,
    availableTags: AVAILABLE_TAGS,

    // Getters
    filteredProjects,
    featuredProjects,

    // Actions
    selectTag,
    resetSelection,
  }
})
