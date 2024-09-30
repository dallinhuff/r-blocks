<script setup lang="ts">
defineProps<{
  title: string
  icon?: string
  description: string
}>()
</script>

<template>
  <div class="flex">
    <div v-if="icon" v-html="icon"></div>
    <div class="ms-5 sm:ms-8">
      <h3 class="text-base sm:text-lg font-semibold text-neutral-200">{{ title }}</h3>
      <p class="mt-1 text-neutral-400">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>