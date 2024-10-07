<script setup lang="ts">
import { icf } from "~/content/solutions/icf";
</script>

<template>
  <div class="max-w-5xl mx-auto w-full px-4 xl:px-0 text-neutral-400">
    <p
      class="text-3xl md:text-4xl text-[#ff0] font-semibold mt-12 mb-10"
      v-html="icf.content[0].description"
    ></p>
    <div class="hidden sm:grid grid-rows-3 grid-cols-3 grid-flow-col">
      <Feature
        v-for="feature in icf.content.slice(1, 4)"
        v-bind="feature"
        class="text-right"
      />
      <Diagram class="w-48 mx-auto row-span-3" />
      <Feature v-for="feature in icf.content.slice(4)" v-bind="feature" />
    </div>
    <div class="block sm:hidden w-full pb-8">
      <Diagram class="w-48 mx-auto" />
      <div class="grid gap-4">
        <Feature v-for="feature in icf.content.slice(1)" v-bind="feature" />
      </div>
    </div>
  </div>
</template>
