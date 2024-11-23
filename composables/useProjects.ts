import { projects, AVAILABLE_TAGS } from '~/data/projectsData'

export function useProjects() {
  const selectedTag = ref<string | null>(null)

  const filteredProjects = computed(() => {
    if (!selectedTag.value) return projects

    return projects.filter((project) =>
      project.tags.includes(selectedTag.value as string)
    )
  })

  const featuredProjects = computed(() =>
    projects.filter((project) => project.featured)
  )

  const selectTag = (tag: string | null) => {
    selectedTag.value = tag
  }

  return {
    projects,
    filteredProjects,
    featuredProjects,
    selectedTag,
    availableTags: AVAILABLE_TAGS,
    selectTag,
  }
}
