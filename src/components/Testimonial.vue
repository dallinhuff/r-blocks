<script setup lang="ts">
import { quotes } from "~/content/home/testimonials"
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pb-24">
      <h3 class="text-3xl md:text-4xl text-white font-semibold">
        Trusted by Industry Professionals
      </h3>
      <Quote v-bind="quotes[0]" />

      <h4 class="text-2xl md:text-3xl mt-16 text-white font-semibold">
        Discover how BTM Concrete in Heber City, Utah gets
        <span class="text-[#ff0]">superior results</span>
        with R-Blocks
      </h4>
      <div class="my-10 relative max-w-5xl mx-auto">
        <video controls>
          <source src="/vid/RBlocks1.mp4" type="video/mp4" />
        </video>
      </div>
      <Quote v-bind="quotes[1]" />
    </div>
  </div>
</template>
