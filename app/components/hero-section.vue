<template>
  <div class="relative flex flex-col items-center py-28">
    <div class="flex w-full flex-col items-center md:items-start">
      <h1
        class="font-heading bg-linear-to-br from-white to-zinc-500 bg-clip-text text-center text-4xl leading-16 font-extrabold tracking-tight text-transparent md:text-start md:text-6xl md:leading-20 lg:text-7xl lg:leading-24"
      >
        CRAFTING
        <span class="block">DIGITAL SYSTEMS</span>
      </h1>
      <p
        class="font-body pt-3 text-center text-xl leading-9 tracking-tight text-zinc-400/80 md:max-w-3xl md:text-start"
      >
        I'm a Frontend Engineer focused on building scalable, aesthetic, and
        high-performance web applications.
      </p>
    </div>
    <div class="mt-4 flex flex-col items-center justify-center">
      <span class="font-code text-zinc-400">Scroll</span>
      <span class="animate-bounce pt-4"> <IconArrowNarrowDown /></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowNarrowDown } from "@tabler/icons-vue";
</script>

<style scoped></style>
