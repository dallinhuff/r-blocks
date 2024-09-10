<template>
  <div class="bg-neutral-900">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
      <h1 class="font-semibold text-white text-5xl md:text-6xl">
        <slot name="heading"></slot>
      </h1>
      <div class="max-w-4xl">
        <p class="mt-5 text-neutral-400 text-lg">
          <slot name="body">
            <p class="text-neutral-400">
              R-Blocks is the ideal ICF solution for all commercial and residential construction projects.
              It meets all requirements for stay-in-place forms in IRC 608.4 and delivers lifetime advantages
              over EPS foam to build solid, reinforced concrete walls.
            </p>
            <p class="text-neutral-400">
              Whether you choose R-Blocks for foundation walls or a complete structure,
              you will save significant time and money during construction and experience
              superior results for the lifetime of your building.
            </p>
            <p class="text-neutral-400">
              R-Blocks' cost is competitive with that of EPS foam molds.
              Yet, It offers much higher value from building faster, straighter, stronger,
              and more durable walls with superior R-value and sound dampening, among other benefits.
            </p>
            <p class="text-neutral-400">
              For example, most EPS blocks are poured at intervals of no more than 4 feet during installation.
              R-Blocks can be poured 10+ feet at a time.
              Besides saving significant labor and material costs, the higher and seamless pours eliminate “cold joints”
              in concrete walls, virtually eliminating the probability of holes and leaks.
            </p>
            <p class="text-neutral-400">
              R-Blocks need far less bracing and setup time due to the superior foam density
              and rigidity supporting higher concrete pours.
              The benefits continue long after construction.
              Polyurethane molds do not break down over time, as EPS molds do, ensuring lifetime value.
            </p>
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>
