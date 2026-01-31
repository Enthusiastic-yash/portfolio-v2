<template>
  <div class="relative flex flex-col items-center py-28">
    <div class="flex w-full flex-col items-center md:items-start">
      <h1
        ref="heroTitle"
        class="font-heading transform-gpu bg-linear-to-br from-white to-zinc-500 bg-clip-text text-center text-4xl leading-16 font-extrabold tracking-tight text-transparent opacity-0 md:text-start md:text-6xl md:leading-20 lg:text-7xl lg:leading-24"
      >
        CRAFTING
        <span class="block">DIGITAL SYSTEMS</span>
      </h1>
      <p
        ref="heroPara"
        class="font-body pt-3 text-center text-xl leading-9 tracking-tight text-zinc-400/80 capitalize opacity-0 md:max-w-3xl md:text-start"
      >
        I’m a Frontend Engineer focused on building scalable, high-performance
        web applications with clean and user-friendly interfaces.
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
const { $gsap } = useNuxtApp();
const heroTitle = ref<HTMLElement | null>(null);
const heroPara = ref<HTMLElement | null>(null);
const isLoaded = ref(false);
let ctx: gsap.Context;

onMounted(() => {
  ctx = $gsap.context(() => {
    $gsap.fromTo(
      heroTitle.value,
      {
        autoAlpha: 0,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "back.inOut",
        delay: 0.2,
      },
    );
  });

  ctx = $gsap.context(() => {
    $gsap.fromTo(
      heroPara.value,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "back.inOut",
        delay: 0.2,
      },
    );
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped></style>
