<template>
  <!-- Desktop navbar -->
  <nav class="relative mx-auto flex w-full max-w-7xl px-4 py-6">
    <div class="mx-auto flex w-full items-center justify-between">
      <span>
        <NuxtLink to="/">
          <NuxtImg
            class="size-10 object-cover invert"
            src="./images/logo.png"
            alt="logo"
          />
        </NuxtLink>
      </span>

      <ul
        class="font-body hidden items-center gap-x-6 text-sm font-medium text-zinc-300 transition-all duration-100 ease-in-out sm:flex"
      >
        <li
          v-for="menu in menuList"
          :key="menu.id"
          class="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-zinc-100"
        >
          <NuxtLink :to="`${menu.link}`">{{ menu.title }}</NuxtLink>
        </li>

        <NuxtLink :to="resumeLink" target="_blank">
          <li>
            <button
              class="group relative cursor-pointer rounded-full bg-zinc-950 px-4 py-1.5 text-zinc-400 ring-1 ring-white/10 transition duration-300 hover:shadow-[0px_0px_12px_rgba(56,189,248,0.35),0_0_28px_rgba(56,189,248,0.25),0_0_60px_rgba(56,189,248,0.15)]"
            >
              Resume
              <!-- underline glow -->
              <span
                class="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:top-0"
              >
              </span>
            </button>
          </li>
        </NuxtLink>
      </ul>

      <!-- Mobile toggle -->
      <button @click="isOpen = !isOpen" class="cursor-pointer sm:hidden">
        <IconMenu2 v-if="!isOpen" stroke="{2}" />
        <IconX v-else stroke="{2}" />
      </button>
    </div>
    <!-- Mobile nav -->
    <div
      class="absolute top-full left-0 z-20 w-full translate-y-0 backdrop-blur-xl transition-all duration-200 ease-out sm:hidden"
      :class="
        isOpen
          ? 'pointer-events-auto translate-y-5 opacity-100'
          : 'pointer-events-none -translate-y-2 opacity-0'
      "
    >
      <ul
        class="font-body flex flex-col items-center gap-x-6 justify-self-start text-lg leading-12 font-medium text-zinc-300"
      >
        <li
          v-for="menu in menuList"
          :key="menu.id"
          class="self-start pl-5 hover:text-zinc-100"
        >
          <NuxtLink :to="`${menu.link}`">{{ menu.title }}</NuxtLink>
        </li>

        <NuxtLink :to="resumeLink" target="_blank">
          <li>
            <button
              class="group relative cursor-pointer rounded-full px-4 py-1.5 hover:text-zinc-100"
            >
              Resume
            </button>
          </li>
        </NuxtLink>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { IconMenu2, IconX } from "@tabler/icons-vue";
const isOpen = ref(false);

const menuList = ref([
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Skills",
    link: "#skills",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
]);

const resumeLink = ref(
  "https://drive.google.com/file/d/1W5ojwOzpuFeYxnHT0J8shQ9cXQCBWwN4/view",
);
</script>

<style scoped></style>
