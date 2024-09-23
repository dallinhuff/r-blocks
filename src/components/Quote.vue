<script setup lang="ts">
interface Props {
  quote: [string, string, string];
  attribution: [string, string];
  image: string;
}

defineProps<Props>();
</script>

<template>
  <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
    <div class="hidden lg:block lg:col-span-2">
      <img class="rounded-xl" :src="image" :alt="attribution[0]" />
    </div>
    <div class="lg:col-span-4 pt-12">
      <blockquote>
        <p
          class="text-xl font-medium lg:text-2xl lg:leading-normal text-neutral-200"
        >
          {{ quote[0] }}
          <span class="text-[#ff0]">{{ quote[1] }}</span>
          {{ quote[2] }}
        </p>
        <footer class="mt-6">
          <div class="flex items-center">
            <div class="lg:hidden flex-shrink-0">
              <img class="size-12 rounded-full" :src="image" :alt="attribution[0]" />
            </div>
            <div class="ms-4 lg:ms-0">
              <p class="font-medium text-neutral-200">{{ attribution[0] }}</p>
              <p class="text-sm text-neutral-400">{{ attribution[1] }}</p>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</template>
