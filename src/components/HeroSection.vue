<template>
  <div class="bg-neutral-900">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 pb-16">
      <h1 class="font-semibold text-white text-5xl md:text-6xl">
        <slot name="heading"></slot>
      </h1>
      <div class="">
        <p class="mt-5 text-neutral-400 text-lg">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
