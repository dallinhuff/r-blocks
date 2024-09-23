<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <div class="bg-neutral-900 rounded-xl">
    <img class="w-full h-auto rounded-xl" :src="src" :alt="alt" />
  </div>
</template>
