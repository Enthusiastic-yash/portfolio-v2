<template>
  <footer class="relative mx-auto w-full max-w-7xl py-20">
    <div class="border-t border-white/10">
      <div
        class="flex flex-col-reverse justify-between px-10 pt-2 text-center md:flex-row"
      >
        <div class="relative z-10 flex flex-col gap-y-2">
          <span
            class="flex justify-center gap-x-2 text-sm tracking-wider text-zinc-400/90 md:justify-start"
          >
            <IconMailFilled class="size-5" />
            YashKashyap1005@gmail.com</span
          >
          <span
            class="flex justify-center gap-x-2 text-sm tracking-wider text-zinc-400/90 md:justify-start"
          >
            <IconUserFilled class="size-5" />
            Yash Kashyap</span
          >
        </div>
        <!-- Social Media -->
        <div
          class="relative z-20 flex justify-center gap-x-4 py-4 md:justify-end md:py-0"
        >
          <NuxtLink
            to="https://github.com/Enthusiastic-yash"
            target="_blank"
            class="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <IconBrandGithubFilled class="peer size-6 hover:text-zinc-300" />
            <span
              class="font-body absolute -top-6 -right-1.5 text-sm opacity-0 transition-all ease-in-out peer-has-hover:opacity-100"
              >Github</span
            >
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/yash-kashyap/"
            target="_blank"
            class="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <IconBrandLinkedinFilled class="peer size-6 hover:text-zinc-300" />
            <span
              class="font-body absolute -top-6 -right-2.5 text-sm opacity-0 transition-all ease-in-out peer-has-hover:opacity-100"
              >LinkedIn</span
            >
          </NuxtLink>
        </div>
      </div>
      <!-- background -->
      <div
        class="absolute inset-0 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-1108/300 w-277 flex-none bg-linear-to-r from-cyan-500 to-blue-800 opacity-35"
          style="
            clip-path: polygon(
              77.5% 40.13%,
              90% 10%,
              100% 50%,
              95% 80%,
              92% 85%,
              75% 65%,
              61.26% 54.7%,
              50% 54.7%,
              47.24% 65.81%,
              50% 85%,
              26.16% 73.91%,
              0.1% 100%,
              1% 40.13%,
              20% 48.75%,
              60% 0.25%,
              67.5% 32.63%
            );
          "
        ></div>
      </div>
    </div>
    <span
      class="font-body absolute bottom-0 flex w-full justify-center overflow-hidden py-4 text-xs text-zinc-400 capitalize"
    >
      &copy; {{ new Date().getFullYear() }} Designed & Built by Yash.
    </span>
  </footer>
</template>

<script setup lang="ts">
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
  IconUserFilled,
} from "@tabler/icons-vue";
</script>

<style scoped></style>
