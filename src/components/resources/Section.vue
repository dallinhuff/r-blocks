<script setup lang="ts">
import { resources } from '~/content/resources'
</script>

<template>
  <HeroSection id="resources">
    <template #heading>
      <span class="text-[#ff0]">{{ resources.title }}</span>
    </template>
    <template #body>
      <ImageCard src="/img/RBlocks2.jpg" alt="R Blocks" class="max-w-5xl mx-auto py-6" />
    </template>
  </HeroSection>

  <IconBlocks>
    <template #body>
      <p class="mt-3 text-neutral-400">{{ resources.description }}</p>
    </template>
    <template #blocks>
      <IconBlock v-for="step in resources.content" :title="step.title">
        {{ step.description }}
        <span class="invisible">_______________________________</span>
      </IconBlock>
    </template>
  </IconBlocks>
</template>

<style scoped>

</style>