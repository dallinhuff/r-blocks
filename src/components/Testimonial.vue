<script setup lang="ts">
import { quotes } from "~/content/home/testimonials";
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pb-24">
      <h3 class="text-3xl md:text-4xl text-white font-semibold">
        Trusted by Industry Professionals
      </h3>
      <Quote v-for="quote in quotes" v-bind="quote" class="mb-8" />

      <h4 class="text-2xl md:text-4xl mt-16 text-white font-semibold">
        Discover how BTM Concrete in Heber City, Utah gets
        <span class="text-[#ff0]">superior results</span>
        with R-Blocks
      </h4>
      <div class="my-10 max-w-5xl mx-auto">
        <iframe
          class="hidden lg:block"
          width="100%"
          height="560px"
          src="https://www.youtube.com/embed/3S9j54JjSbU?&theme=dark&autohide=2"
        ></iframe>
        <iframe
          class="hidden md:block lg:hidden"
          width="100%"
          height="480px"
          src="https://www.youtube.com/embed/3S9j54JjSbU?&theme=dark&autohide=2"
        ></iframe>
        <iframe
          class="hidden sm:block md:hidden"
          width="100%"
          height="360px"
          src="https://www.youtube.com/embed/3S9j54JjSbU?&theme=dark&autohide=2"
        ></iframe>
        <iframe
          class="block sm:hidden"
          width="100%"
          height="240px"
          src="https://www.youtube.com/embed/3S9j54JjSbU?&theme=dark&autohide=2"
        ></iframe>
      </div>
    </div>
  </div>
</template>
