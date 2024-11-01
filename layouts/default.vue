<template>
  <div>
    <NavigationHeader />
    <Background />
    <slot />
  </div>
</template>

<script setup>

const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background: linear-gradient(-45deg, #000000, #160202);
  /* background-color: #22262E; */
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  color: #ebf4f1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
