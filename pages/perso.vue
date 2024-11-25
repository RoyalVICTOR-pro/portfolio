<template>
  <h1 class="font-heading md:mt-28 mb-12 text-center text-2xl">
    Quelques bribes de moi...
  </h1>

  <div class="container mx-auto mb-28">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div v-for="item in personalGallery" :key="item.image" class="w-full">
        <PersonalGalleryItem
          :image="item.image"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Plus sur moi',
  meta: [{ name: 'description', content: 'Quelques bribes de moi...' }],
})

const personalGallery = [
  {
    image: 'images/personal/danse.png',
    description: 'Ancien danseur',
    icon: 'IconDancing',
  },
  {
    image: 'images/personal/enseignement.png',
    description: 'Enseignant occasionnel (MJM, Webstart, CESI)',
    icon: 'IconStudent',
  },
  {
    image: 'images/personal/iam.png',
    description: "Demain c'est loin...<br /><br />IAM",
    icon: 'IconHeadphone',
  },
  {
    image: 'images/personal/inception.png',
    description: 'Inception, Memento...<br /><br />Christopher Nolan',
    icon: 'IconMovie',
  },
  {
    image: 'images/personal/agathachristie.png',
    description: 'La fin... WOW !',
    icon: 'IconBook',
  },
  {
    image: 'images/personal/jocelynbrown.png',
    description: "Somebody else's guy<br /><br />Jocelyn Brown",
    icon: 'IconHeadphone',
  },
  {
    image: 'images/personal/kravmaga.png',
    description: 'Instructeur de Krav Maga',
    icon: 'IconBoxing',
  },
  {
    image: 'images/personal/ladydiana.png',
    description: "A l'aise en anglais<br />(Niveau B2 confirmé)",
    icon: 'IconLondon',
  },
  {
    image: 'images/personal/lofigirl.png',
    description:
      'Fantasy Lofi, Summer Lofi, Jazz Lofi... pour une productivité au max !',
    icon: 'IconTimer',
  },
  {
    image: 'images/personal/loupsgarous.png',
    description: 'Je te jure, je suis pas loup !',
    icon: 'IconGame',
  },
  {
    image: 'images/personal/mouradwinter.png',
    description:
      "Les meufs,<br />c'est des mecs biens<br /><br />Mourad Winter",
    icon: 'IconBook',
  },
  {
    image: 'images/personal/notion.png',
    description: 'Notion... parce que Notion !',
    icon: 'IconNotion',
  },
  {
    image: 'images/personal/pomodoro.png',
    description: 'Adepte du Pomodoro, Flowmodoro...',
    icon: 'IconTimer',
  },
  {
    image: 'images/personal/usualsuspect.png',
    description:
      '"Et d\'un coup, fiou !<br />Il s\'envole."<br /><br />Usual Suspects',
    icon: 'IconMovie',
  },
  {
    image: 'images/personal/divartcite.png',
    description: 'Multiples bénévolats associatifs',
    icon: 'IconHelp',
  },
  {
    image: 'images/personal/timesup.png',
    description: 'Pour mon imitation de Mickael Jackson,<br />contactez moi !',
    icon: 'IconGame',
  },
]
</script>

<style></style>
