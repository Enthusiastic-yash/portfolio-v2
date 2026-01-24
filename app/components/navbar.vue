<template>
  <!-- Desktop navbar -->
  <nav class="flex justify-between px-4 py-6">
    <span>
      <img
        class="size-10 object-cover invert"
        src="../assets/images/logo.png"
        alt=""
        srcset=""
      />
    </span>
    <ul
      class="font-body flex items-center gap-x-6 text-sm font-medium text-zinc-300 transition"
    >
      <li class="hover:text-zinc-100">
        <a href="#">About</a>
      </li>
      <li class="hover:text-zinc-100">
        <a href="#">Skills</a>
      </li>
      <li class="hover:text-zinc-100">
        <a href="#">Projects</a>
      </li>
      <li class="hover:text-zinc-100">
        <a href="#">Experience</a>
      </li>
      <li>
        <button
          class="group relative cursor-pointer rounded-full px-4 py-1.5 ring-1 ring-white/10 transition duration-300 hover:shadow-[0px_0px_12px_rgba(56,189,248,0.35),0_0_28px_rgba(56,189,248,0.25),0_0_60px_rgba(56,189,248,0.15)]"
        >
          Resume
          <!-- underline glow -->
          <span
            class="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:top-0"
          >
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
