export interface Project {
  id: string
  tags: string[]
  thumbnail: string
  title: string
  description: string
  url: string
  featured?: boolean
  date: string
  mainImage: string
  moreImages?: string[]
  description_projet: string
  contexte_client: string
  taches_realisees: string
  stack_technique: string
  contexte_professionnel: string
  chiffres_cles?: string
}

export const projects: Project[] = [
  {
    id: 'steewo',
    tags: ['Développeur', 'Product Owner'],
    thumbnail: 'images/achievements/thumbnails/steewo.png',
    title: 'Steewo.io',
    description:
      "MVP d'une plateforme de mise en relation entre étudiants freelances et entreprises",
    url: '/projets/steewo',
    featured: true,
    date: '2023/2024',
    mainImage: 'images/achievements/steewo-01.webp',
    moreImages: [
      'images/achievements/steewo-02.webp',
      'images/achievements/steewo-03.webp',
      'images/achievements/steewo-04.webp',
    ],
    description_projet:
      'Plateforme BtoC de mise en relation entre clients et étudiants pour réaliser des missions freelance.',
    contexte_client: 'Startup en création<br />Besoin d’un MVP',
    taches_realisees:
      'Conception fonctionnelle<br />Conception et choix techniques<br />Modélisation Base de données<br />Développement API<br />Développement outil backoffice',
    stack_technique:
      'Typescript<br /><b>Back :</b> AdonisJS, NestJS, TypeORM, Nestjsx/crud, TDD, Queuing Redis, N-tiers, API Mailjet, S3...<br /><b>Front :</b> Nuxt 3, Vue 3, Composition API, Store Pinia, Tailwind CSS,<br />Tests automatisés, TDD',
    contexte_professionnel: 'Freelance<br />Seul puis équipe de 2 développeurs',
  },
  {
    id: 'modsho',
    tags: ['Product Owner', 'Scrum Master'],
    thumbnail: 'images/achievements/thumbnails/modsho-vifor.png',
    title: 'Modsho',
    description:
      'Solution de présentation commerciale modulaire online/offline',
    url: '/projets/modsho',
    featured: true,
    date: '2014 - 2022',
    mainImage: 'images/achievements/modsho-01.webp',
    moreImages: [
      'images/achievements/modsho-02.webp',
      'images/achievements/modsho-03.webp',
      'images/achievements/modsho-04.webp',
      'images/achievements/modsho-05.webp',
    ],
    description_projet:
      'Co-création d’une solution de présentation commerciale BtoB permettant aux utilisateurs de créer des présentations personnalisées à partir de contenus maîtrisés par les directions commerciales et marketing.',
    contexte_client:
      'Clients variés (santé, hôtellerie, luxe, industrie, services, évènementiel...)',
    taches_realisees:
      "Pilotage agile d'une équipe technique de 4 à 8 développeurs<br />Conception/Scénarisation des projets<br />Gestion des projets clients<br />Marketing/Communication/Développement commercial du produit<br />Déploiement via MDM (Airwatch)",
    stack_technique:
      'PHP/MySQL (Framework Laravel)<br />Angular / Ionic<br />Cordova (Tablettes iOS / Android)<br />Node Webkit (Windows Desktop)',
    contexte_professionnel: 'CDI Cbi Multimédia / Team Modsho',
    chiffres_cles: '15 clients<br />400 utilisateurs<br />10 ans d’existence',
  },
  {
    id: 'yvan-bonet',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/yvan-bonet.png',
    title: 'Cabinet Avocat',
    description: "Site de présentation d'un cabinet d'avocat",
    url: '/projets/yvan-bonet',
    featured: false,
    date: '2023',
    mainImage: 'images/achievements/yvan-bonet-01.webp',
    moreImages: ['images/achievements/yvan-bonet-02.webp'],
    description_projet: 'Site vitrine pour un cabinet d’avocat',
    contexte_client: 'Avocat ayant besoin de refaire son site internet',
    taches_realisees:
      'Prise de brief<br />Conception fonctionnelle / UX<br />Développement Backoffice de gestion<br />Développement Frontend + intégration<br />Déploiement',
    stack_technique:
      'Javascript<br />NodeJS/Express/MySQL<br />VueJS<br />HTML/CSS',
    contexte_professionnel: 'Freelance',
  },
  {
    id: 'barriere',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/barriere.png',
    title: 'Barrière',
    description: "Script récursif d'extraction de données",
    url: '/projets/barriere',
    featured: false,
    date: '2023',
    mainImage: 'images/achievements/barriere.webp',
    description_projet:
      "Développement d'un script récursif permettant l'export de la galerie Modsho pour Barrière",
    contexte_client: 'Missions réalisés pour Barrière avec l’agence 16com',
    taches_realisees: 'Développement<br />Tests',
    stack_technique: 'NodeJS<br />Javascript',
    contexte_professionnel: 'Freelance / Anciens clients',
  },
  {
    id: 'assa-abloy-catalogue',
    tags: ['Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/assa-abloy-catalogue.png',
    title: 'Catalogue Produit Assa Abloy',
    description:
      "Réalisation d'un catalogue produit multi-plateforme iOS/Android/Windows connecté à un ERP métier",
    url: '/projets/assa-abloy-catalogue',
    featured: true,
    date: '2019 - 2022',
    mainImage: 'images/achievements/assa-abloy-01.webp',
    moreImages: [
      'images/achievements/assa-abloy-02.webp',
      'images/achievements/assa-abloy-03.webp',
    ],
    description_projet:
      'Application catalogue connectée à un ERP via une API REST',
    contexte_client: 'Groupe Assa Abloy (Vachette)',
    taches_realisees:
      'Conception fonctionnelle<br />Spécifications techniques<br />Gestion de projet<br />Gestion d’équipe<br />Relation Client<br />Formation Utilisateurs',
    stack_technique:
      'PHP/MySQL (Framework Laravel)<br />Angular<br />Ionic<br />Cordova<br />Node Webkit',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'lgp-plan',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/lgp-plan.png',
    title: 'Lille Grand Palais Plan',
    description:
      "Développement d'un plan interactif au sein de l'application Modsho LGP",
    url: '/projets/lgp-plan',
    featured: false,
    date: '2023',
    mainImage: 'images/achievements/lgp-plan.webp',
    description_projet:
      "Développement d'un plan intéractif pour une slide de contenu au sein de l'application Modsho de Lille Grand Palais",
    contexte_client: 'Client Modsho Lille Grand Palais',
    taches_realisees: 'Conception fonctionnelle<br />Développement<br />Tests',
    stack_technique: 'Javascript<br />HTML/CSS',
    contexte_professionnel: 'Freelance / Anciens clients',
  },
  {
    id: 'keep-your-time',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/keep-your-time.png',
    title: 'Keep Your Time',
    description:
      'Application iPad de gestion du temps pour enfants (Side-project)',
    url: '/projets/keep-your-time',
    featured: false,
    date: '2020',
    mainImage: 'images/achievements/keep-your-time-01.webp',
    moreImages: ['images/achievements/keep-your-time-02.webp'],
    description_projet:
      "Développement d'une application iPad de gestion du temps pour enfants (Side-project)",
    contexte_client: 'Mes enfants !',
    taches_realisees: 'Conception fonctionnelle<br />Développement<br />Tests',
    stack_technique: 'HTML/CSS<br />Javascript<br />Phonegap',
    contexte_professionnel: 'Sideproject',
  },
  {
    id: 'adhika',
    tags: ['Développeur', 'Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/adhika.png',
    title: 'Adhika',
    description: "Site de promotion de biens immobiliers d'entreprise",
    url: '/projets/adhika',
    featured: false,
    date: '2016',
    mainImage: 'images/achievements/adhika-01.webp',
    moreImages: ['images/achievements/adhika-02.webp'],
    description_projet: 'Site vitrine BtoB d’un promoteur immobilier',
    contexte_client: 'Société construisant des entrepôts et des habitations',
    taches_realisees: 'Participation au développement<br />Gestion de projet',
    stack_technique: 'HTML5/CSS3<br />Javascript<br />JQuery',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'iseo',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/iseo.png',
    title: 'ISEO',
    description: 'Application Offline Catalogue',
    url: '/projets/iseo',
    featured: false,
    date: '2008',
    mainImage: 'images/achievements/iseo.webp',
    description_projet:
      "Développement d'une application de catalogue offline pour ISEO",
    contexte_client: 'ISEO Société spécialisée dans la sécurité des accès',
    taches_realisees: 'Développement<br />Tests',
    stack_technique: 'Macromedia/Adobe Director (Lingo)',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'adequation',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/adequation.png',
    title: 'Emailings',
    description: "Intégration d'emailings en optimisant la délivrabilité",
    url: '/projets/adequation',
    featured: false,
    date: '2018',
    mainImage: 'images/achievements/adequation.webp',
    description_projet:
      'Intégration de multiples emailings en optimisant la délivrabilité',
    contexte_client: 'Clients divers',
    taches_realisees: 'Intégration<br />Tests',
    stack_technique: 'HTML 4',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'analogway',
    tags: ['Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/analogway.png',
    title: 'Analogway',
    description: 'Refonte technique et graphique du site',
    url: '/projets/analogway',
    featured: false,
    date: '2016 - 2019',
    mainImage: 'images/achievements/analogway-01.webp',
    moreImages: ['images/achievements/analogway-02.webp'],
    description_projet:
      'Refonte Site internet BtoB (site internet initial créé également par Cbi Multimédia en 2013)',
    contexte_client:
      "Analog Way est l'un des principaux concepteurs et fabricants mondiaux d'équipements haut de gamme dédiés au secteur de l'audiovisuel professionnel",
    taches_realisees:
      'Conception fonctionnelle<br />Accompagnement équipe graphique<br />Gestion de projet<br />Gestion d’équipe<br />Relation Client',
    stack_technique:
      'PHP/MySQL (Framework Laravel)<br />HTML/CSS<br />Balsamiq Mockups',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'antalis',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/antalis.png',
    title: 'Antalis',
    description:
      "Participation au développement d'une application de formation",
    url: '/projets/antalis',
    featured: false,
    date: '2010',
    mainImage: 'images/achievements/antalis.webp',
    description_projet:
      'Participation au développement d’une application de formation interne',
    contexte_client: 'Antalis, Groupe leader de la distribution de papiers',
    taches_realisees: "Développement d'un quiz dynamique",
    stack_technique: 'ActionScript 2<br />Adobe Flash',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },

  {
    id: 'cicaclic',
    tags: ['Product Owner'],
    thumbnail: 'images/achievements/thumbnails/cicaclic.png',
    title: 'Cicaclic',
    description:
      "Refonte technique et graphique d'une application mobile pour infirmiers",
    url: '/projets/cicaclic',
    featured: false,
    date: '2021 - 2022',
    mainImage: 'images/achievements/cicaclic-01.webp',
    moreImages: [
      'images/achievements/cicaclic-02.webp',
      'images/achievements/cicaclic-03.webp',
    ],
    description_projet:
      'Refonte technique et graphique d’une application à destination des infirmiers',
    contexte_client: 'Agence partenaire Studionysos<br />Laboratoires Convatec',
    taches_realisees:
      'Conception fonctionnelle et technique<br />Gestion de projet agile<br />Gestion d’équipe (4 développeurs)',
    stack_technique:
      'Angular<br />Ionic<br />Cordova (iOS / Android)<br />PHP/MySQL (Framework Laravel)<br />Serveurs certifiés Santé',
    contexte_professionnel: 'CDI Agence 16com',
    chiffres_cles: '+1000 utilisateurs',
  },
  {
    id: 'fouedajs',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/fouedajs.png',
    title: 'Foued AJS',
    description: "Site Flash de promotion d'un artiste",
    url: '/projets/fouedajs',
    featured: false,
    date: '2014',
    mainImage: 'images/achievements/fouedajs.webp',
    description_projet: 'Site de promotion d’un artiste danseur professionnel',
    contexte_client: 'Outil de démarchage de l’artiste',
    taches_realisees:
      'Conception fonctionnelle<br />Développement<br />Déploiement',
    stack_technique:
      'Adobe Flash<br />ActionScript 3<br />HTML<br />PHP<br />MySQL',
    contexte_professionnel: 'Sideproject',
  },
  {
    id: 'geekwatch',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/geekwatch.png',
    title: 'Opération marketing',
    description: "Intégration d'une page d'opération marketing",
    url: '/projets/geekwatch',
    featured: false,
    date: '2022',
    mainImage: 'images/achievements/geekwatch.webp',
    description_projet:
      "Intégration d'une page pour une opération marketing autour du 1er avril",
    contexte_client: 'Agence 16com',
    taches_realisees: 'Intégration responsive',
    stack_technique: 'HTML5/CSS3',
    contexte_professionnel: 'CDI Agence 16com',
  },
  {
    id: 'gmf-vie',
    tags: ['Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/gmf-vie.png',
    title: 'GMF Vie',
    description:
      'Application semi-connectée de formation interne sous forme de jeu',
    url: '/projets/gmf-vie',
    featured: false,
    date: '2016',
    mainImage: 'images/achievements/gmf-vie-01.webp',
    moreImages: [
      'images/achievements/gmf-vie-02.webp',
      'images/achievements/gmf-vie-03.webp',
      'images/achievements/gmf-vie-04.webp',
    ],
    description_projet: 'Application ludique de contrôle des connaissance',
    contexte_client:
      "L'assureur GMF avait besoin de contrôler les connaissances de ces collaborateurs sur ses produits à travers des sessions fun et interactives.",
    taches_realisees:
      'Prise de brief<br />Avant-vente, Devis<br />Conception fonctionnelle<br />Conception technique<br />Suivi du projet et de l’équipe<br />Tests<br />Livraison<br />Déploiement',
    stack_technique:
      'Adobe AIR<br />Adobe Flash<br />Actionscript 3<br />PHP/MySQL',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'ipsen',
    tags: ['Développeur'],
    thumbnail: 'images/achievements/thumbnails/ipsen.png',
    title: 'Etude Devenir IPSEN',
    description:
      "Développement d'un site de restitution de résultats d'une étude scientifique",
    url: '/projets/ipsen',
    featured: false,
    date: '2012',
    mainImage: 'images/achievements/ipsen-01.webp',
    moreImages: ['images/achievements/ipsen-02.webp'],
    description_projet:
      'Plateforme web de suivi d’une étude médicale autour de l’oncologie',
    contexte_client:
      'Projet tripartite entre une agence de communication santé, des experts et les laboratoires IPSEN',
    taches_realisees:
      'Conception fonctionnelle<br />Conception technique<br />Développement Frontoffice et backoffice<br />Intégration des interfaces',
    stack_technique:
      'PHP (Framework MVC propriétaire)<br />MySQL<br />HTML/CSS',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'modsho-es',
    tags: ['Product Owner'],
    thumbnail: 'images/achievements/thumbnails/modsho-es.png',
    title: 'Modsho',
    description: 'Application de présentation commerciale modulaire',
    url: '/projets/modsho-es',
    featured: false,
    date: '2019',
    mainImage: 'images/achievements/modsho-es.webp',
    description_projet: 'Mise en place de projet Modsho pour des clients',
    contexte_client: 'Evènement Spectacle (Client Modsho)',
    taches_realisees:
      "Prise de brief<br />Conception fonctionnelle<br />Mise en place graphique et technique de l'application<br />Production des contenus<br />Tests<br />Déploiement<br />Formation",
    stack_technique:
      'Balsamiq Mockups<br />Indesign<br />HTML/CSS<br />Cordova<br />NodeWebkit',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
  {
    id: 'plateforme-voeux',
    tags: ['Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/plateforme-voeux.png',
    title: 'Plateforme Voeux',
    description: "Application de gestion d'envoi de voeux de fin d'année",
    url: '/projets/plateforme-voeux',
    featured: false,
    date: '2011 - 2022',
    mainImage: 'images/achievements/voeux-01.webp',
    moreImages: [
      'images/achievements/voeux-02.webp',
      'images/achievements/voeux-03.webp',
    ],
    description_projet:
      'Plateforme de carte de voeux éditée par l’agence Cbi Multimédia permettant aux utilisateurs d’envoyer les voeux d’entreprises avec des messages personnalisés',
    contexte_client: 'Plateforme déployée chez +50 clients durant +10 ans',
    taches_realisees:
      'Conception fonctionnelle<br />Améliorations UX<br />Gestion du projet et de l’équipe<br />Tests',
    stack_technique:
      'HTML/CSS<br />PHP/MySQL (Framework Propriétaire + Laravel)',
    contexte_professionnel: 'CDI Cbi Multmédia',
  },
  {
    id: 'sorepi',
    tags: ['Développeur', 'Chef de projet'],
    thumbnail: 'images/achievements/thumbnails/sorepi.png',
    title: 'Matériel Informatique Occasion',
    description: "Site e-commerce de matériel informatique d'occasion",
    url: '/projets/sorepi',
    featured: false,
    date: '2007 - 2010',
    mainImage: 'images/achievements/sorepi-01.webp',
    moreImages: ['images/achievements/sorepi-02.webp'],
    description_projet:
      'Site E-commerce de vente de matériel informatique d’occasion',
    contexte_client:
      'Société SOREPI spécialisée dans la gestion du matériel informatique obsolète des entreprises',
    taches_realisees:
      'Conception fonctionnelle<br />Conception technique<br />Encadrement d’une équipe de 3 développeurs<br />Développement<br />Implémentation de système de paiement et de livraison<br />Intégration<br />Tests<br />Mise en ligne',
    stack_technique: 'PHP/MySQL<br />XHTML/CSS2',
    contexte_professionnel: 'CDI Cbi Multimédia',
  },
]

export const AVAILABLE_TAGS = [
  'Développeur',
  'Chef de projet',
  'Product Owner',
] as const
