<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="mx-auto mt-20 text-center">
    <h1 class="text-6xl text-blue-600 font-bold underline">{{ msg }}</h1>
    <h3 class="text-blue-800 mt-10">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
