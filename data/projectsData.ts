export interface Project {
  id: string
  tags: string[]
  image: string
  title: string
  description: string
  url: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'steewo',
    tags: ['Développeur', 'Product Owner'],
    image: 'images/achievements/thumbnails/steewo.png',
    title: 'Steewo.io',
    description:
      "MVP d'une plateforme de mise en relation entre étudiants freelances et entreprises",
    url: '/projets/steewo',
    featured: true,
  },
  {
    id: 'modsho',
    tags: ['Product Owner', 'Scrum Master'],
    image: 'images/achievements/thumbnails/modsho-vifor.png',
    title: 'Modsho',
    description:
      'Solution de présentation commerciale modulaire online/offline',
    url: '/projets/modsho',
    featured: true,
  },
  {
    id: 'assa-abloy-catalogue',
    tags: ['Chef de projet'],
    image: 'images/achievements/thumbnails/assa-abloy-catalogue.png',
    title: 'Catalogue Produit Assa Abloy',
    description:
      "Réalisation d'un catalogue produit multi-plateforme iOS/Android/Windows connecté à un ERP métier",
    url: '/projets/assa-abloy-catalogue',
    featured: true,
  },
]

export const AVAILABLE_TAGS = [
  'Développeur',
  'Chef de projet',
  'Product Owner',
] as const
