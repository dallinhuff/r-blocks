<script setup lang="ts">

</script>

<template>
  <HeroSection>
    <template #heading>Partners</template>
    <template #body>
      <p>
        R-Blocks has close partnerships with engineering, installation, and logistics experts
        to fully support your residential and commercial building projects from design to completion.
      </p>
      <br>
      Partner references and contact information are available upon request for:
      <ul class="list-disc pl-8 py-2 flex flex-col gap-y-2">
        <li>
          <NuxtLink
            class="inline-flex items-center gap-x-1 font-medium text-[#ff0]"
            to="https://www.epiceng.net/"
          >
            Epic Engineering
            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="inline-flex items-center gap-x-1 font-medium text-[#ff0]"
            to=""
          >
            Huff n Puff Logistics
            <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </NuxtLink>
        </li>
      </ul>
    </template>
  </HeroSection>
</template>

<style scoped>

</style>