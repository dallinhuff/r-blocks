<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const isStep = computed(() => Number.isInteger(Number(props.title)))
</script>

<template>
  <div class="flex">
    <span class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-neutral-200 text-neutral-200 shadow-sm mx-auto">
      <span v-if="isStep" class="font-bold">{{ title }}</span>
      <svg v-else class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
    </span>
    <div class="ms-5 sm:ms-8">
      <h3 v-if="!isStep" class="sm:text-lg font-semibold text-white">
        {{ title }}
      </h3>
      <p class="mt-1 text-neutral-400">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>