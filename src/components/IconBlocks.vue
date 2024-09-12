<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 xl:px-0 pb-24">
    <div class="grid md:grid-cols-2 gap-12">
      <div class="lg:w-3/4">
        <h2 class="text-3xl text-white font-bold lg:text-4xl dark:text-white">
          {{ title }}
        </h2>
        <slot name="body"></slot>
      </div>
      <div class="space-y-6 lg:space-y-10">
        <slot name="blocks"></slot>
      </div>
    </div>
  </div>
</template>
