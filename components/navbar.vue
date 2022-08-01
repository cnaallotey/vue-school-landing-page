<template>
  <div>
    <nav class="max-w-screen-xl mx-auto px-4 md:px-12 lg:px-4">
      <div class="w-full flex flex-row items-center justify-between">
        <Logo />
        <div class="hidden md:flex">
          <ul
            class="inline-flex space-x-10 text-white font-sans font-medium uppercase text-xs tracking-tight"
          >
            <li class="hover:text-secondary-500"><a href="#">contact us</a></li>
            <li class="hover:text-secondary-500"><a href="#">sign in</a></li>
            <li class="hover:text-secondary-500"><a href="#">sign up</a></li>
          </ul>
        </div>
        <div class="md:hidden relative">
          <button class="text-white" @click="menuOpen = !menuOpen">
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
          <div
            class="absolute right-0 w-56 bg-primary-600 py-1 mt-2 top-19 rounded-md shadow-lg focus:outline-none"
            v-if="menuOpen"
          >
            <div>
              <div class="px-2 pt-2 pb-3 space-y-1 uppercase">
                <a
                  href="#"
                  class="text-white font-sans hover:bg-primary-700 hover:text-secondary-500 block px-3 py-2 rounded-md text-sm font-medium"
                  >Contact us</a
                >
                <a
                  href="#"
                  class="text-white font-sans hover:bg-primary-700 hover:text-secondary-500 block px-3 py-2 rounded-md text-sm font-medium"
                  >Sign in</a
                >
                <a
                  href="#"
                  class="text-white font-sans hover:bg-primary-700 hover:text-secondary-500 block px-3 py-2 rounded-md text-sm font-medium"
                  >sign up</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";

const menuOpen = ref(false);
</script>
