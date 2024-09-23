<script setup lang="ts">
import { hero } from "~/content/home/hero";
import { advantages } from "~/content/home/advantages";
import { features } from "~/content/home/features";
</script>

<template>
  <HeroSection>
    <template #heading>
      <span class="text-[#ff0]">{{ hero.title }}</span> {{ hero.subtitle }}
    </template>
    <template #body>
      {{ hero.body }}
    </template>
  </HeroSection>

  <ImageCard src="/img/RBlocks4.jpg" alt="R Blocks" class="max-w-5xl mx-auto px-4 pb-24" />

  <IconBlocks :title="advantages.title">
    <template #body>
      <template v-for="[lead, emphasis, follow] in advantages.description">
        <p class="mt-3 text-neutral-400">
          {{ lead }}
          <span class="text-neutral-100">{{ emphasis }}</span>
          {{ follow }}
        </p>
      </template>
      <p class="mt-5">
        <ContactLink />
      </p>
    </template>
    <template #blocks>
      <IconBlock v-for="{ title, description: [lead, emphasize, follow] } in advantages.content" :title="title">
        {{ lead }}
        <span class="text-[#ff0]">{{ emphasize }}</span>
        {{ follow }}
      </IconBlock>
    </template>
  </IconBlocks>

  <Testimonial />

  <ImageCard src="/img/RBlocks8.jpg" alt="R Blocks" class="max-w-5xl mx-auto px-4 pb-24" />

  <Features :title="features.title" :subtitle="features.description">
    <template #col1>
      <template v-for="feature in features.content.slice(0, 3)">
        <Feature v-bind="feature" />
      </template>
    </template>
    <template #col2>
      <template v-for="feature in features.content.slice(3)">
        <Feature v-bind="feature" />
      </template>
    </template>
  </Features>
</template>
