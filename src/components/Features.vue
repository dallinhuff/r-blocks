<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-5xl mx-auto px-4 xl:px-0">
      <h3 class="text-3xl md:text-4xl text-white font-semibold">{{ title }}</h3>
      <p class="text-neutral-400 text-lg font-semibold my-8">{{ subtitle }}</p>
    </div>
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
        <div class="space-y-6 lg:space-y-10">
          <slot name="col1"></slot>
        </div>

        <div class="space-y-6 lg:space-y-10">
          <slot name="col2"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>