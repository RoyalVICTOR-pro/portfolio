<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-no-repeat">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient
          v-if="colorMode.value == 'dark'"
          id="grad"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            offset="0%"
            style="stop-color: rgb(44, 153, 171); stop-opacity: 0.1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(111, 242, 249); stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          v-else-if="colorMode.value == 'light'"
          id="grad"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop
            offset="0%"
            style="stop-color: rgb(251, 127, 127); stop-opacity: 0.1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(247, 176, 182); stop-opacity: 0"
          />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
      </defs>
      <circle cx="50%" cy="50%" r="50%" fill="url(#grad)" filter="url(#blur)" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<style></style>
