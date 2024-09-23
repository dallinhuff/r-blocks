<script setup lang="ts">
import { partners } from "~/content/partners";
</script>

<template>
  <HeroSection id="partners">
    <template #heading>{{ partners.title }}</template>
    <template #body>
      <template v-for="(section, i) in partners.description">
        <br v-if="i > 0">
        <p>{{ section }}</p>
      </template>
      <ul class="list-disc pl-8 py-2 flex flex-col gap-y-2">
        <li v-for="partner in partners.content">
          <NuxtLink
            class="inline-flex items-center gap-x-1 font-medium text-[#ff0]"
            :to="partner.url"
          >
            {{ partner.title }}
            <svg
              class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </template>
  </HeroSection>
</template>
