<template>
  <div class="gallery-item">
    <div class="image-container">
      <img :src="image" alt="Personal Gallery Item" />
      <div class="overlay">
        <component :is="resolveIcon" class="w-10 h-10 mb-5 text-foreground" />
        <p v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconBook from '@/components/Icon/Book.vue'
import IconHeadphone from '@/components/Icon/Headphone.vue'
import IconStudent from '@/components/Icon/Student.vue'
import IconGame from '@/components/Icon/Game.vue'
import IconMovie from '@/components/Icon/Movie.vue'
import IconBoxing from '@/components/Icon/Boxing.vue'
import IconDancing from '@/components/Icon/Dancing.vue'
import IconHelp from '@/components/Icon/Help.vue'
import IconTimer from '@/components/Icon/Timer.vue'
import IconNotion from '@/components/Icon/Notion.vue'
import IconLondon from '@/components/Icon/London.vue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

const iconComponents = {
  IconBoxing,
  IconDancing,
  IconHelp,
  IconTimer,
  IconHeadphone,
  IconStudent,
  IconBook,
  IconNotion,
  IconLondon,
  IconMovie,
  IconGame,
}

const resolveIcon = computed(
  () => iconComponents[props.icon as keyof typeof iconComponents]
)
</script>

<style scoped>
.gallery-item {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  display: flex;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.image-container:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
}

.image-container:hover .overlay {
  opacity: 1;
}
</style>
