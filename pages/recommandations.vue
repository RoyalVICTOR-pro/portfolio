<template>
  <h1 class="font-heading md:mt-28 text-center text-2xl">
    C'est eux qui le disent...
  </h1>
  <div class="container mx-auto mb-28">
    <div class="flex flex-col gap-12 border-secondary">
      <ScrollReveal v-for="item in recommandations">
        <RecommandationCard
          :key="item.name"
          :name="item.name"
          :position="item.position"
          :text="item.text"
          :anchor="item.anchor"
        />
      </ScrollReveal>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Recommandations',
  meta: [
    {
      name: 'description',
      content: 'Quelques recommandations de mes collègues',
    },
  ],
})

const recommandations = [
  {
    anchor: 'stephane-guillo',
    name: 'Stéphane GUILLO',
    position: "Directeur d'agence - Ancien manager",
    text: `J'ai travaillé avec Royal dans deux cadres professionnels différents, et à chaque fois, il s'est démarqué par son expertise technique et ses grandes qualités relationnelles.
    <br /><br />En tant que Product Owner sur une application de présentation commerciale, Royal a guidé des choix technologiques pertinents. Nous avons ainsi pu développer un produit solide et évolutif, répondant parfaitement aux attentes du marché et des utilisateurs. Sa compréhension fine des enjeux techniques et fonctionnels, ainsi que son sens du collectif, ont été des atouts majeurs dans la réussite du produit tant techniquement qu’humainement.
    <br /><br />Royal était également Chef de projet digital, j’ai pu apprécier pendant de nombreuses années ses compétences de gestion d'équipe et relation client. Que ce soit avec les développeurs, les designers ou les clients, Royal instaure une atmosphère de confiance et de collaboration. Il sait écouter, comprendre les besoins et les formaliser de manière claire et efficace. Ses qualités humaines font de lui un excellent médiateur entre les différents intervenants, ce qui facilite grandement le bon déroulement des projets et la vie au sein de l’agence.
    <br /><br />Enfin, travailler avec lui a toujours été un plaisir. Son attitude positive, son professionnalisme et son sens des relations humaines en font un collègue précieux. J’appréciais particulièrement d’échanger avec lui, ce qui nous a toujours permis de trouver des solutions à des problèmes complexes. Je recommande Royal sans hésitation à toute entreprise cherchant un profil à la fois technique et humainement exceptionnel.
    <br /><br />Merci, Royal, d'avoir toujours été là à mes côtés pour résoudre les défis les plus complexes avec une énergie inépuisable. Travailler avec toi a été un véritable privilège et je sais que je peux toujours compter sur toi, tant pour tes conseils que pour un soutien inconditionnel.`,
  },
  {
    anchor: 'julien-laurent',
    name: 'Julien LAURENT',
    position: 'Lead Développeur',
    text: `Le chainon manquant entre les clients et les développeurs !
          <br /><br />J'ai eu le plaisir de travailler avec Royal pendant plus de 15 ans au sein d'une agence digitale en tant que développeur. Il a été mon chef de projet sur de nombreuses réalisations très variées, du rapid game réalisé en 2 jours à l'outil cross platform de gestion de contenus déployé en MDM sur des flottes de devices sur des années.
          <br /><br />Royal est aussi à l'aise avec les clients qu'avec les développeurs. Il comprend les besoins et aide à les murir. Il sait les formaliser, connait les implications techniques et comprend le jargon des programmeurs. Selon mon expérience c'est très rare et tellement précieux !
          <br /><br />La deuxième chose remarquable c'est son état d'esprit positif à toute épreuve. Quel que soit le contexte Royal transmet toujours de bonnes ondes. Il est également très soucieux des autres. C'est un collègue sur qui on peut compter qui ne vous laissera jamais tomber, qui pense d'abord à vous.
          <br /><br />Échanger avec lui m'a souvent permis de trouver des solutions à mes problèmes.
          <br /><br />Je regrette que nos routes professionnelles se soient séparées et ne peut que vous recommander de croiser la sienne ;)`,
  },
  {
    anchor: 'anne-didelet',
    name: 'Anne DIDELET',
    position: 'Responsable de clientèle',
    text: `Partager des rendez-vous d'avant vente avec Royal a toujours été un grand plus pour le closing des dossiers digitaux : relation commerciale et contact client innés, rôle de product owner et  chargé d'étude digitale rassurant pour les clients qui grâce à lui pendant et après la phase de vente bénéficiaient d'un allié ultra professionnel pour mener à bien le montage et le lancement de leur projet.
    <br /><br />Merci à toi Royal pour ces belles années de collaboration !`,
  },
]
</script>

<style></style>
