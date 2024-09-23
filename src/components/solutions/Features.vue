<script setup lang="ts">
import { icf } from '~/content/solutions/icf'
</script>

<template>
  <div class="max-w-5xl mx-auto w-full text-neutral-400">
    <div class="hidden md:grid grid-rows-3 grid-cols-3 grid-flow-col">
      <Feature v-for="feature in icf.content.slice(1, 4)" v-bind="feature" />
      <Diagram class="w-48 mx-auto row-span-3"/>
      <Feature v-for="feature in icf.content.slice(4)" v-bind="feature" />
    </div>
    <div class="block md:hidden w-full">
      <Diagram class="w-48 mx-auto row-span-3"/>
      <Feature v-for="feature in icf.content.slice(1)" v-bind="feature" />
    </div>
  </div>
</template>
