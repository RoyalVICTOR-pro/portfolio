<template>
  <div>
    <div
      class="w-full flex justify-around items-center px-4 pb-10 gap-2 h-[600px]"
    >
      <div class="flex flex-col h-[600px] w-1/2">
        <div class="mt-10 h-[200px] mb-8">
          <InspiraBlurReveal>
            <h1 class="font-heading font-extralight text-8xl mt-8 mb-4">
              Royal <b class="font-bold">VICTOR</b>
            </h1>
            <h2
              class="font-heading font-light text-4xl mb-12 ml-1 text-primary"
            >
              Développeur Fullstack
            </h2>
          </InspiraBlurReveal>
        </div>
        <h3 class="font-heading ml-1 mb-12 text-2xl">
          "J'aime combiner technique et vision métier<br />pour des solutions
          digitales utiles et performantes."
        </h3>
        <div>
          <UTooltip
            text="Typescript/Javascript"
            :popper="{ placement: 'bottom' }"
          >
            <UIcon name="i-cib-typescript" class="w-10 h-10 mr-3" />
          </UTooltip>
          <UTooltip
            text="VueJS (Composition API, Pinia, Vue Router...)"
            :popper="{ placement: 'bottom' }"
          >
            <UIcon name="i-fa-brands-vuejs" class="w-11 h-11 mr-1" />
          </UTooltip>
          <UTooltip text="NuxtJS" :popper="{ placement: 'bottom' }">
            <UIcon name="i-cib-nuxt-js" class="w-11 h-11 mr-3" />
          </UTooltip>
          <UTooltip
            text="NodeJS (Express, NestJS, AdonisJS)"
            :popper="{ placement: 'bottom' }"
          >
            <UIcon name="i-fa-brands-node-js" class="w-10 h-10" />
          </UTooltip>
          <br />
          <Collapsible v-model:open="techMoreIsOpen" class="mt-3">
            <CollapsibleTrigger class="text-sm flex justify-center mb-3">
              <span>Voir plus</span>
              <UIcon
                name="i-fa-solid-chevron-down"
                class="w-3 h-3 ml-2 mt-1 pt-1"
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul>
                <li>
                  <b>Transverse : </b>Typescript, Javascript, TDD (Jest, Japa),
                  sensible au clean code
                </li>
                <li><b>Frontend : </b>VueJS, Nuxt, Tailwind, HTML5, CSS3</li>
                <li>
                  <b>Backend : </b>NodeJS, NestJS, AdonisJS, Swagger, PHP,
                  Laravel
                </li>
                <li>
                  <b>Base de données : </b>MySQL, MongoDB, Redis, TypeORM, Lucid
                  ORM, Eloquent ORM
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <PhotoRollover class="h-fit bg-slate-50 flex" />
    </div>
    <!-- <UCard class="bg-[#120202] text-center text-2xl ring-transparent">
      Un projet ? Une mission ? Une opportunité ?
      <UButton color="primary" variant="solid" class="ml-4 text-xl"
        >Contactez-moi</UButton
      >
    </UCard> -->
    <div class="flex flex-col w-full mx-auto items-center gap-8 mt-28">
      <h2 class="font-light text-2xl ml-1">Parcours</h2>
      <Stepper class="flex w-full items-start gap-2 mb-12" :defaultValue="5">
        <StepperItem
          v-for="step in steps"
          :key="step.step"
          v-slot="{ state }"
          class="relative flex w-full flex-col items-center justify-center"
          :step="step.step"
        >
          <StepperSeparator
            v-if="step.step !== steps[steps.length - 1].step"
            class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
          />

          <StepperTrigger as-child>
            <Button
              :variant="
                state === 'completed' || state === 'active'
                  ? 'default'
                  : 'outline'
              "
              size="icon"
              class="z-10 rounded-full shrink-0"
              :class="[
                state === 'active' &&
                  'ring-2 ring-ring ring-offset-2 ring-offset-background',
              ]"
            >
              <Check v-if="state === 'completed'" class="size-5" />
              <Circle v-if="state === 'active'" />
              <Dot v-if="state === 'inactive'" />
            </Button>
          </StepperTrigger>

          <div class="mt-5 flex flex-col items-center text-center">
            <StepperTitle
              :class="[state === 'active' && 'text-primary']"
              class="text-sm font-semibold transition lg:text-base"
            >
              {{ step.title }}
            </StepperTitle>
            <StepperDescription
              :class="[state === 'active' && 'text-primary']"
              class="sr-only text-xs text-slate-400 transition md:not-sr-only lg:text-sm"
              v-html="step.description"
            >
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
    </div>
    <div class="flex justify-evenly mt-28">
      <div class="flex flex-col items-center w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-primary"
        >
          +18ans
        </h3>
        <p class="text-center text-2xl">d'expérience<br />dans le digital</p>
      </div>
      <div class="flex flex-col items-center w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-primary"
        >
          +500
        </h3>
        <p class="text-center text-2xl">projets réalisés</p>
      </div>
      <div class="flex flex-col items-center w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-primary"
        >
          +5ans
        </h3>
        <p class="text-center text-2xl">
          d'expérience<br />en tant que développeur
        </p>
      </div>
    </div>
    <div class="flex justify-evenly mt-28 mb-28">
      <UCard
        class="bg-[#120202] text-center w-1/4"
        :ui="{ ring: 'ring-1 ring-[#3E2525] dark:ring-red-800' }"
      >
        <h3 class="font-bold mb-4 text-2xl">Profil</h3>
        Consciencieux<br />
        Autonome et pro-actif<br />
        Team player<br />
      </UCard>
      <UCard
        class="bg-[#120202] text-center w-1/4"
        :ui="{ ring: 'ring-1 ring-[#3E2525] dark:ring-red-800' }"
      >
        <h3 class="font-bold mb-4 text-2xl">Qualités reconnues</h3>
        Très bon relationnel<br />
        Capacité d’adaptation<br />
        Pédagogue
      </UCard>
    </div>
    <!-- <Collapsible v-model:open="xpMoreIsOpen" class="mt-3 mx-auto w-2/3 mb-28">
      <CollapsibleTrigger
        class="text-sm flex justify-center mb-3 w-1/3 mx-auto"
      >
        <span>En savoir plus</span>
        <UIcon name="i-fa-solid-chevron-down" class="w-3 h-3 ml-2 mt-1 pt-1" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        Avec 𝟭𝟴 𝗮𝗻𝘀 𝗱'𝗲𝘅𝗽é𝗿𝗶𝗲𝗻𝗰𝗲 𝗱𝗮𝗻𝘀 𝗹𝗲 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗲𝘁 𝗽𝗹𝘂𝘀 𝗱𝗲 𝟱𝟬𝟬 𝗽𝗿𝗼𝗷𝗲𝘁𝘀
        𝗿é𝗮𝗹𝗶𝘀é𝘀, j'ai un parcours riche de développeur, UX Designer, chef de
        projet et Product Owner. Je me consacre à nouveau pleinement au
        développement depuis plus de 2 ans. (+5 ans XP au total). Cette
        expérience me permet de combiner mes compétences techniques avec une
        𝘀𝗼𝗹𝗶𝗱𝗲 𝗰𝗼𝗺𝗽𝗿é𝗵𝗲𝗻𝘀𝗶𝗼𝗻 𝗱𝗲𝘀 𝗲𝗻𝗷𝗲𝘂𝘅 𝗺é𝘁𝗶𝗲𝗿𝘀. Ma force réside dans mon
        𝗲𝘅𝗰𝗲𝗹𝗹𝗲𝗻𝘁 𝗿𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝗻𝗲𝗹 et ma 𝗰𝗮𝗽𝗮𝗰𝗶𝘁é 𝗱'𝗮𝗱𝗮𝗽𝘁𝗮𝘁𝗶𝗼𝗻, des atouts qui m'ont
        permis de surmonter divers défis dans des contextes variés. → Ma
        priorité : contribuer à des projets avec des équipes dynamiques, rester
        à l’écoute des besoins utilisateurs et continuer à apprendre.
      </CollapsibleContent>
    </Collapsible> -->
    <section>
      <h2 class="font-heading font-bold text-3xl text-center">
        Sélection de projets
      </h2>

      <div class="flex justify-around mt-12 gap-2">
        <Achievement
          v-for="achievement in achievements"
          :key="achievement.title"
          :tags="achievement.tags"
          :image="achievement.image"
          :title="achievement.title"
          :description="achievement.description"
          :url="achievement.url"
          class="w-1/3"
        />
      </div>
      <UButton class="mt-12" color="primary" variant="solid" to="/projets"
        >Voir tous les projets</UButton
      >
    </section>
  </div>
</template>

<script lang="ts" setup>
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'
import { Check, Circle, Dot } from 'lucide-vue-next'

const techMoreIsOpen = ref(false)
// const xpMoreIsOpen = ref(false)

const steps = [
  {
    step: 1,
    title: 'Développeur',
    description: `E-commerce<br>Forum<br>Outils web<br>App Offline<br>Emailings`,
  },
  {
    step: 2,
    title: 'Chef de projet',
    description: 'Technique<br>Fonctionnel<br>Relation client',
  },
  {
    step: 3,
    title: "Chargé d'études digitales",
    description: "UX Design<br>Avant-vente<br>Appels d'offre",
  },
  {
    step: 4,
    title: 'Product Owner',
    description:
      "Stratégie Produit<br>Gestion d'équipe technique<br>Agile (Scrum, Kanban)<br>Communication/Marketing<br>Formation Utilisateurs",
  },
  {
    step: 5,
    title: 'Développeur',
    description: 'Plateforme mise en relation<br>Site vitrine<br>Divers',
  },
]

const achievements = [
  {
    tags: ['Développeur', 'Product Owner'],
    image: 'images/achievements/steewo.png',
    title: 'Steewo.io',
    description:
      "MVP d'une plateforme de mise en relation entre étudiants freelances et entreprises",
    url: 'https://royalvictor.fr',
  },
  {
    tags: ['Product Owner', 'Scrum Master'],
    image: 'images/achievements/lgp.png',
    title: 'Modsho',
    description:
      'Solution de présentation commerciale modulaire online/offline',
    url: 'https://royalvictor.fr',
  },
  {
    tags: ['Chef de projet'],
    image: 'images/achievements/assa-abloy.png',
    title: 'Catalogue Produit Assa Abloy',
    description:
      "Réalisation d'un catalogue produit multi-plateforme iOS/Android/Windows connecté à un ERP métier",
    url: 'https://royalvictor.fr',
  },
]
</script>

<style></style>
