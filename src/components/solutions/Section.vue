<script setup lang="ts">
import { icf } from "~/content/solutions/icf"
import { residential } from '~/content/solutions/residential'
import { commercial } from '~/content/solutions/commercial'
</script>

<template>
  <HeroSection id="solutions">
    <template #heading>
      <span class="text-[#ff0]">{{ icf.title }}</span>
   </template>
    <template #body>
      <ImageCard src="/img/RBlocks6.jpg" alt="R Blocks" class="max-w-5xl mx-auto py-6" />
      <template v-for="(section, i) in icf.description">
        <br v-if="i > 0">
        <p class="text-neutral-400 text-lg">{{ section }}</p>
      </template>
      <br>
      <p class="text-[#ff0] text-lg">{{ icf.content[0].description }}</p>
    </template>
  </HeroSection>

  <SolutionsFeatures />

  <HeroSection>
    <template #heading>
      {{ residential.title }}
    </template>
    <template #body>
      <ImageCard src="/img/RBlocks10.jpg" alt="R Blocks" class="max-w-5xl mx-auto py-6" />
      <template v-for="section in residential.description">
        <p class="text-neutral-400 text-lg">{{ section }}</p>
        <br>
      </template>
      <ContactLink />
    </template>
  </HeroSection>

  <HeroSection>
    <template #heading>
      {{ commercial.title }}
    </template>
    <template #body>
      <ImageCard src="/img/RBlocks1.jpg" alt="R Blocks" class="max-w-5xl mx-auto py-6" />
      <template v-for="section in commercial.description">
        <p class="text-neutral-400 text-lg">{{ section }}</p>
        <br>
      </template>
      <ContactLink/>
    </template>
  </HeroSection>
</template>
