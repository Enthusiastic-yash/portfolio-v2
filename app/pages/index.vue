<template>
  <container>
    <div
      class="absolute inset-0 bg-[radial-gradient(80%_100%_at_50%_-30%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))] mask-[radial-gradient(75%_180%_at_top_center,white,transparent)] stroke-white/5"
    >
      <!-- grid pattern work with mask gradient -->
      <svg
        class="__web-inspector-hide-shortcut__ absolute inset-0 -z-10 h-full w-full mask-[radial-gradient(75%_50%_at_top_center,white,transparent)] stroke-white/5"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#hero)"
        ></rect>
      </svg>
    </div>

    <navbar />
    <hero-section />
  </container>
</template>

<script setup lang="ts">
import HeroSection from "~/components/hero-section.vue";
</script>

<style scoped></style>
