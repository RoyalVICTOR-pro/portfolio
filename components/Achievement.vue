<template>
  <div class="achievement">
    <NuxtLink :to="url">
      <div class="image-container">
        <img :src="thumbnail" alt="Achievement" />
        <div class="overlay">
          <h3 class="font-bold mb-2">{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </NuxtLink>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.achievement {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.image-container {
  cursor: pointer;
  width: 100%;
  aspect-ratio: 16 / 9;
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
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 2rem;
  text-align: center;
}

.image-container:hover .overlay {
  opacity: 1;
}

.tags {
  display: flex;
  margin-top: 10px;
}

.tag {
  background-color: #eee;
  border-radius: 5px;
  padding: 5px;
  margin: 0 10px 0 0;
  font-size: 12px;
  color: #121212;
}
</style>
