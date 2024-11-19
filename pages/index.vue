<template>
  <section
    class="w-full flex flex-col justify-around items-center px-4 pb-10 gap-2 md:h-[600px] md:flex-row md:mt-28"
  >
    <div
      class="flex flex-col gap-8 md:h-[600px] sm:w-full sm:ml-8 md:w-1/2 text-center md:text-left"
    >
      <div class="mt-10 h-[200px] mb-0 md:mb-8">
        <InspiraBlurReveal>
          <h1
            class="font-heading font-extralight text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-8 mb-4"
          >
            Royal <b class="font-bold">VICTOR</b>
          </h1>
          <h2
            class="font-heading font-light text-3xl md:text-4xl ml-1 text-gradient-primary mb-4"
          >
            Développeur Fullstack
          </h2>
        </InspiraBlurReveal>
      </div>
      <h3 class="font-heading font-light ml-1 mb-12 text-xl md:text-2xl pr-3">
        "J'aime combiner technique et vision métier pour des solutions digitales
        utiles et performantes."
      </h3>
      <div>
        <CustomTooltip icon="IconTypescript" text="Typescript/Javascript" />
        <CustomTooltip
          icon="IconVueJS"
          text="VueJS (Composition API, Pinia, Vue Router...)"
        />
        <CustomTooltip icon="IconNuxt" text="NuxtJS" />
        <CustomTooltip
          icon="IconNodeJS"
          text="NodeJS (Express, NestJS, AdonisJS)"
        />
        <br />
        <Collapsible v-model:open="techMoreIsOpen" class="mt-3">
          <CollapsibleTrigger
            class="text-sm flex justify-center mb-3 mx-auto md:mx-0"
          >
            <span>Voir plus</span>
            <IconChevronDown class="w-6 h-6 ml-2 pb-1" />
          </CollapsibleTrigger>
          <CollapsibleContent class="text-left">
            <ul>
              <li>
                <b>Transverse : </b>Typescript, Javascript, TDD (Jest, Japa),
                sensible au clean code
              </li>
              <li><b>Frontend : </b>VueJS, Nuxt, Tailwind, HTML5, CSS3</li>
              <li>
                <b>Backend : </b>NodeJS, NestJS, AdonisJS, PHP, Laravel, Swagger
              </li>
              <li>
                <b>Base de données : </b>MySQL, MongoDB, Redis, TypeORM,
                LucidORM, EloquentORM
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
    <PhotoRollover class="h-fit bg-slate-50 flex md:w-1/3 md:h-auto mt-8" />
  </section>
  <ScrollReveal>
    <section
      class="flex flex-col w-full mx-auto items-center gap-8 mt-12 md:mt-28 px-4"
    >
      <h2 class="font-light text-2xl ml-1">Parcours</h2>
      <Stepper
        :class="isMobile ? 'vertical-stepper' : 'horizontal-stepper'"
        :defaultValue="5"
      >
        <StepperItem
          v-for="step in steps"
          :key="step.step"
          v-slot="{ state }"
          :class="
            isMobile ? 'vertical-stepper-item' : 'horizontal-stepper-item'
          "
          :step="step.step"
        >
          <StepperSeparator
            v-if="step.step !== steps[steps.length - 1].step"
            :class="
              isMobile
                ? 'vertical-stepper-separator'
                : 'horizontal-stepper-separator'
            "
          />

          <StepperTrigger as-child>
            <Button
              :variant="
                state === 'completed' || state === 'active'
                  ? 'default'
                  : 'outline'
              "
              size="icon"
              class="z-10 rounded-full shrink-0 text-white bg-gradient-primary flex items-center justify-center"
              :class="[
                state === 'active' &&
                  'ring-2 ring-foreground ring-offset-2 ring-offset-background',
              ]"
            >
              <ChevronsRight
                v-if="state === 'completed'"
                class="!w-6 !h-6 pl-0.5 rotate-90 md:rotate-0"
              />
              <Circle v-if="state === 'active'" />
              <Dot v-if="state === 'inactive'" />
            </Button>
          </StepperTrigger>

          <div
            :class="
              isMobile
                ? 'vertical-stepper-content'
                : 'horizontal-stepper-content'
            "
          >
            <StepperTitle
              :class="[state === 'active' && 'text-primary']"
              class="text-lg md:text-sm transition lg:text-base"
            >
              {{ step.title }}
            </StepperTitle>
            <StepperDescription
              :class="[
                state === 'active' && 'text-primary',
                isMobile
                  ? 'text-sm'
                  : 'sr-only md:not-sr-only text-xs lg:text-sm',
              ]"
              class="text-slate-700 dark:text-slate-400 transition"
              v-html="step.description"
            >
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
    </section>
  </ScrollReveal>
  <ScrollReveal>
    <section
      class="flex flex-col md:flex-row mt-28 gap-12 md:gap-0 md:justify-evenly"
    >
      <div class="flex flex-col items-center md:w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-gradient-primary"
        >
          +18ans
        </h3>
        <p class="text-center text-2xl">d'expérience<br />dans le digital</p>
      </div>
      <div class="flex flex-col items-center md:w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-gradient-primary"
        >
          +500
        </h3>
        <p class="text-center text-2xl">projets réalisés</p>
      </div>
      <div class="flex flex-col items-center md:w-1/4">
        <h3
          class="font-heading font-bold text-7xl ml-1 mb-4 text-center text-gradient-primary"
        >
          +5ans
        </h3>
        <p class="text-center text-2xl">
          d'expérience<br />en tant que développeur
        </p>
      </div>
    </section>
  </ScrollReveal>
  <ScrollReveal>
    <section
      class="flex justify-center md:justify-evenly mt-28 mb-28 flex-col md:flex-row gap-12 md:gap-0"
    >
      <Card class="w-7/8 mx-4 md:w-1/4 text-center border-secondary">
        <CardHeader>
          <CardTitle>Profil</CardTitle>
        </CardHeader>
        <CardContent>
          Consciencieux<br />
          Autonome et pro-actif<br />
          Team player<br />
        </CardContent>
      </Card>
      <Card class="w-7/8 mx-4 md:w-1/4 text-center border-secondary">
        <CardHeader>
          <CardTitle>Qualités reconnues</CardTitle>
        </CardHeader>
        <CardContent>
          Très bon relationnel<br />
          Capacité d’adaptation<br />
          Pédagogue
        </CardContent>
      </Card>
    </section>
  </ScrollReveal>
  <ScrollReveal>
    <section class="flex flex-col items-center w-full mb-28">
      <h2 class="font-heading font-bold text-3xl text-center">
        Sélection de projets
      </h2>

      <div
        class="flex flex-col md:flex-row justify-around mt-12 gap-8 md:gap-2 px-4"
      >
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
      <Button class="bg-gradient-primary text-white mt-8">
        <NuxtLink to="/projets"> Voir plus </NuxtLink>
      </Button>
    </section>
  </ScrollReveal>
  <ScrollReveal>
    <section class="mb-28 px-6">
      <h2 class="font-heading font-bold text-3xl text-center mb-12">
        Recommandations
      </h2>
      <Carousel
        v-slot="{ canScrollNext, canScrollPrev }"
        class="relative w-full max-w-2xl mx-auto flex flex-col md:flex-row"
      >
        <CarouselContent>
          <CustomCarrouselItem url="/recommandations/#julien-laurent">
            <p class="mb-4">
              "... Royal est aussi à l'aise avec les clients qu'avec les
              développeurs. Il comprend les besoins et aide à les murir. Il sait
              les formaliser, connait les implications techniques et comprend le
              jargon des programmeurs. Selon mon expérience c'est très rare et
              tellement précieux !..."
            </p>
            <b>Julien LAURENT</b>
            <i>Lead Développeur</i>
          </CustomCarrouselItem>
          <CustomCarrouselItem url="/recommandations/#stephane-guillo">
            <p class="mb-4">
              "...travailler avec lui a toujours été un plaisir. Son attitude
              positive, son professionnalisme et son sens des relations humaines
              en font un collègue précieux. J'appréciais particulièrement
              d'échanger avec lui, ce qui nous a toujours permis de trouver des
              solutions à des problèmes complexes..."
            </p>
            <b>Stéphane GUILLO</b>
            <i>Directeur opérationnel</i>
          </CustomCarrouselItem>
          <CustomCarrouselItem url="/recommandations/#anne-didelet">
            <p class="mb-4">
              "Partager des rendez-vous d'avant vente avec Royal a toujours été
              un grand plus pour le closing des dossiers digitaux : relation
              commerciale et contact client innés, rôle de product owner et
              chargé d'étude digitale rassurant pour les clients..."
            </p>
            <b>Anne DIDELET</b>
            <i>Directrice de clientèle</i>
          </CustomCarrouselItem>
        </CarouselContent>
        <CarouselPrevious v-if="!isMobile" class="md:ml-2" />
        <CarouselNext v-if="!isMobile" class="md:mr-2" />
        <div
          v-if="isMobile"
          class="flex justify-center items-center gap-4 mt-6"
        >
          <CarouselPrevious class="static translate-y-0" />
          <CarouselNext class="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  </ScrollReveal>
  <CallToAction />
</template>

<script lang="ts" setup>
import { ChevronsRight, Circle, Dot } from 'lucide-vue-next'

const isMobile = useIsMobile()
const techMoreIsOpen = ref(false)

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
    description: 'Plateforme de mise en relation<br>Site vitrine<br>Divers',
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

<style scoped>
.vertical-stepper {
  @apply mx-auto flex w-full max-w-md flex-col justify-start gap-10;
}
.horizontal-stepper {
  @apply flex w-full items-start gap-2 mb-12;
}
.vertical-stepper-item {
  @apply relative flex w-full items-start gap-6;
}
.horizontal-stepper-item {
  @apply relative flex w-full flex-col items-center justify-center;
}
.vertical-stepper-separator {
  @apply absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary;
}
.horizontal-stepper-separator {
  @apply absolute sm:left-[calc(50%+20px)] sm:right-[calc(-50%+10px)] md:left-[calc(30%+20px)] md:right-[calc(-56%)] lg:left-[calc(50%+20px)] lg:right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary;
}
.vertical-stepper-content {
  @apply flex flex-col gap-1;
}
.horizontal-stepper-content {
  @apply mt-5 flex flex-col items-center text-center;
}
</style>
