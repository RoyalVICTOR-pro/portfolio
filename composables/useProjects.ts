import { projects, AVAILABLE_TAGS } from '~/data/projectsData'

export function useProjects() {
  const selectedTag = ref<string | null>(null)
  const isVisible = ref(true)

  const filteredProjects = computed(() => {
    if (!selectedTag.value) return projects

    return projects.filter((project) =>
      project.tags.includes(selectedTag.value as string)
    )
  })

  const featuredProjects = computed(() =>
    projects.filter((project) => project.featured)
  )

  const selectTag = async (tag: string | null) => {
    isVisible.value = false
    await new Promise((resolve) => setTimeout(resolve, 200))
    selectedTag.value = tag
    isVisible.value = true
  }

  return {
    projects,
    filteredProjects,
    featuredProjects,
    selectedTag,
    isVisible,
    availableTags: AVAILABLE_TAGS,
    selectTag,
  }
}
