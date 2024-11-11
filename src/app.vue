<script setup lang="ts">
const title = "R-Blocks: The Pinnacle of ICF";
const description = `R-Blocks is the pinnacle of Insulated Concrete Forms (ICF) manufacturing. Our stay-in-place reinforced concrete wall molds are exclusively made with polyurethane foam and precision methods, offering superior construction advantages, lifetime savings, and value. Our products are backed by 30 years of experience in creating the most cost-efficient permanent building solutions for commercial and residential projects.`;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - R-Blocks` : title;
  },
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="bg-neutral-900 min-h-screen">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
