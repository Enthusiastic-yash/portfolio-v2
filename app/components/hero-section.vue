<template>
  <div class="relative flex flex-col items-center justify-center">
    <div class="absolute inset-0 mt-40 h-72">
      <h1
        class="font-heading bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-4xl leading-16 font-extrabold tracking-tight text-transparent md:text-start md:text-6xl md:leading-20 lg:text-7xl lg:leading-24"
      >
        CRAFTING
        <span class="block">DIGITAL SYSTEMS</span>
      </h1>
      <p
        class="font-body pt-3 text-center text-xl leading-9 tracking-tight text-zinc-400 md:text-start"
      >
        I'm a Full Stack Design Engineer focused on building scalable,
        aesthetic, and high-performance web applications.
      </p>
      <div class="mt-4 flex flex-col items-center justify-center">
        <span class="font-code text-zinc-400">Scroll</span>
        <span class="animate-bounce pt-4"> <IconArrowNarrowDown /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowNarrowDown } from "@tabler/icons-vue";
</script>

<style scoped></style>
