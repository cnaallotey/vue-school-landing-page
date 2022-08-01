<template>
  <div>
    <nav class="max-w-screen-xl mx-auto px-4 md:px-12 lg:px-4">
      <div class="w-full flex flex-row items-center justify-between">
        <Logo />
        <div class="hidden md:flex">
          <ul
            class="inline-flex space-x-10 text-white font-sans font-medium uppercase text-xs tracking-tight"
          >
            <li><a href="#">contact us</a></li>
            <li><a href="#">sign in</a></li>
            <li><a href="#">sign up</a></li>
          </ul>
        </div>
        <div class="md:hidden">
          <button class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
</script>
