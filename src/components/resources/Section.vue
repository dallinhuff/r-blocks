<script setup lang="ts">
import {resources} from '~/content/resources'
</script>

<template>
  <HeroSection id="resources">
    <template #heading>
      <span class="text-[#ff0]">{{ resources.title }}</span>
    </template>
    <template #body>
      <h4 class="text-2xl md:text-4xl mt-16 text-white font-semibold">
        Discover how R Blocks can help you build smart and live secure.
      </h4>
      <div class="my-10 max-w-5xl mx-auto">
        <iframe
            class="hidden lg:block"
            width="100%"
            height="560px"
            src="https://www.youtube.com/embed/Rc2ePGiPIKc?&theme=dark&autohide=2"
        ></iframe>
        <iframe
            class="hidden md:block lg:hidden"
            width="100%"
            height="480px"
            src="https://www.youtube.com/embed/Rc2ePGiPIKc?&theme=dark&autohide=2"
        ></iframe>
        <iframe
            class="hidden sm:block md:hidden"
            width="100%"
            height="360px"
            src="https://www.youtube.com/embed/Rc2ePGiPIKc?&theme=dark&autohide=2"
        ></iframe>
        <iframe
            class="block sm:hidden"
            width="100%"
            height="240px"
            src="https://www.youtube.com/embed/Rc2ePGiPIKc?&theme=dark&autohide=2"
        ></iframe>
      </div>
    </template>
  </HeroSection>
</template>

<style scoped>

</style>