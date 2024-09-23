<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - R-Blocks` : "R-Blocks: The Pinnacle of ICF";
  },
});
</script>

<template>
  <div class="bg-neutral-900 min-h-screen">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
