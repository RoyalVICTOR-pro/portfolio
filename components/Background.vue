<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-no-repeat">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop
            offset="0%"
            style="stop-color: rgb(143, 9, 9); stop-opacity: 0.1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(233, 21, 40); stop-opacity: 0"
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
console.log('Background component')
</script>

<style></style>
