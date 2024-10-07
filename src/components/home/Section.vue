<script setup lang="ts">
import { hero } from "~/content/home/hero";
import { features } from "~/content/home/features";
import { advantages } from "~/content/home/advantages";
</script>

<template>
  <HeroSection>
    <template #heading>
      <span class="text-[#ff0]">{{ hero.title }}</span> {{ hero.subtitle }}
    </template>
    <template #body>
      <div class="grid lg:grid-cols-3 gap-12 pt-2">
        <p class="text-xl text-neutral-400">{{ hero.body }}</p>
        <ImageCard
          src="/img/RBlocks4.jpg"
          alt="R Blocks"
          class="lg:col-span-2 order-first md:order-last"
        />
      </div>
    </template>
  </HeroSection>

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

  <ImageCard
    src="/img/RBlocks2.jpg"
    alt="R Blocks"
    class="max-w-5xl mx-auto px-4 xl:px-0 pb-12"
  />

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
      <IconBlock
        v-for="{
          title,
          description: [lead, emphasize, follow],
        } in advantages.content"
        :title="title"
      >
        {{ lead }}
        <span class="text-[#ff0]">{{ emphasize }}</span>
        {{ follow }}
      </IconBlock>
    </template>
  </IconBlocks>

  <ImageCard
    src="/img/RBlocks12.jpg"
    alt="R Blocks"
    class="max-w-5xl mx-auto px-4 lx:px-0 pb-18"
  />

  <SolutionsFeatures />

  <Testimonial />
</template>
