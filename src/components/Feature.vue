<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex">
    <slot name="icon"></slot>
    <div class="ms-5 sm:ms-8">
      <h3 class="text-base sm:text-lg font-semibold text-neutral-200">{{ title }}</h3>
      <p class="mt-1 text-neutral-400">
        <slot name="default"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>