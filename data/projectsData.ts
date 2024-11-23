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
    id: 'yvan-bonet',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/yvan-bonet.png',
    title: 'Cabinet Avocat',
    description: "Site de présentation d'un cabinet d'avocat",
    url: '/projets/yvan-bonet',
    featured: false,
  },
  {
    id: 'barriere',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/barriere.png',
    title: 'Barrière',
    description: "Script récursif d'extraction de données",
    url: '/projets/barriere',
    featured: false,
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
  {
    id: 'lgp-plan',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/lgp-plan.png',
    title: 'Lille Grand Palais Plan',
    description:
      "Développement d'un plan interactif au sein de l'application Modsho LGP",
    url: '/projets/lgp-plan',
    featured: false,
  },
  {
    id: 'keep-your-time',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/keep-your-time.png',
    title: 'Keep Your Time',
    description:
      'Application iPad de gestion du temps pour enfants (Side-project)',
    url: '/projets/keep-your-time',
    featured: false,
  },
  {
    id: 'adhika',
    tags: ['Développeur', 'Chef de projet'],
    image: 'images/achievements/thumbnails/adhika.png',
    title: 'Adhika',
    description: "Site de promotion de biens immobiliers d'entreprise",
    url: '/projets/adhika',
    featured: false,
  },
  {
    id: 'iseo',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/iseo.png',
    title: 'ISEO',
    description: 'Application Offline Catalogue',
    url: '/projets/iseo',
    featured: false,
  },
  {
    id: 'adequation',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/adequation.png',
    title: 'Emailings',
    description: "Intégration d'emailings en optimisant la délivrabilité",
    url: '/projets/adequation',
    featured: false,
  },
  {
    id: 'analogway',
    tags: ['Chef de projet'],
    image: 'images/achievements/thumbnails/analogway.png',
    title: 'Analogway',
    description: 'Refonte technique et graphique du site',
    url: '/projets/analogway',
    featured: false,
  },
  {
    id: 'antalis',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/antalis.png',
    title: 'Antalis',
    description:
      "Participation au développement d'une application de formation",
    url: '/projets/antalis',
    featured: false,
  },

  {
    id: 'cicaclic',
    tags: ['Product Owner'],
    image: 'images/achievements/thumbnails/cicaclic.png',
    title: 'Cicaclic',
    description:
      "Refonte technique et graphique d'une application mobile pour infirmiers",
    url: '/projets/cicaclic',
    featured: false,
  },
  {
    id: 'fouedajs',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/fouedajs.png',
    title: 'Foued AJS',
    description: "Site Flash de promotion d'un artiste",
    url: '/projets/fouedajs',
    featured: false,
  },
  {
    id: 'geekwatch',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/geekwatch.png',
    title: 'Opération marketing',
    description: "Intégration d'une page d'opération marketing",
    url: '/projets/geekwatch',
    featured: false,
  },
  {
    id: 'gmf-vie',
    tags: ['Chef de projet'],
    image: 'images/achievements/thumbnails/gmf-vie.png',
    title: 'GMF Vie',
    description:
      'Application semi-connectée de formation interne sous forme de jeu',
    url: '/projets/gmf-vie',
    featured: false,
  },
  {
    id: 'ipsen',
    tags: ['Développeur'],
    image: 'images/achievements/thumbnails/ipsen.png',
    title: 'Etude Devenir IPSEN',
    description:
      "Développement d'un site de restitution de résultats d'une étude scientifique",
    url: '/projets/ipsen',
    featured: false,
  },
  {
    id: 'modsho-es',
    tags: ['Product Owner'],
    image: 'images/achievements/thumbnails/modsho-es.png',
    title: 'Modsho',
    description: 'Application de présentation commerciale modulaire',
    url: '/projets/modsho-es',
    featured: false,
  },
  {
    id: 'plateforme-voeux',
    tags: ['Chef de projet'],
    image: 'images/achievements/thumbnails/plateforme-voeux.png',
    title: 'Plateforme Voeux',
    description: "Application de gestion d'envoi de voeux de fin d'année",
    url: '/projets/plateforme-voeux',
    featured: false,
  },
  {
    id: 'sorepi',
    tags: ['Développeur', 'Chef de projet'],
    image: 'images/achievements/thumbnails/sorepi.png',
    title: 'Matériel Informatique Occasion',
    description: "Site e-commerce de matériel informatique d'occasion",
    url: '/projets/sorepi',
    featured: false,
  },
]

export const AVAILABLE_TAGS = [
  'Développeur',
  'Chef de projet',
  'Product Owner',
] as const
