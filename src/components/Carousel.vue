<script setup lang="ts">
defineProps<{
  slides: string[]
}>()
</script>

<template>
  <div
    data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}'
    class="relative max-w-5xl mx-auto px-4 xl:px-0"
  >
    <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg mb-16">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        <div v-for="slide in slides" class="hs-carousel-slide">
          <div class="h-full bg-neutral-900">
            <img :src="slide">
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
      <span class="sr-only">Previous</span>
    </button>
    <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
    </button>
  </div>
</template>

<style scoped>

</style>