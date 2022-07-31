<template>
  <section class="w-full bg-primary-500 pt-3">
    <nav class="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4">
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
    <div class="w-fit mx-auto mt-[25px]">
      <h1
        class="font-heading text-[56px] md:text-[100px] lg:text-[140px] tracking-normal text-center text-white font-normal uppercase"
      >
        Black Friday sale
      </h1>
      <h1
        class="font-heading text-[56px] md:text-[79px] lg:text-[109px] tracking-tight text-center -mt-5 lg:-mt-10 text-white font-normal uppercase"
      >
        40% Off. 48 Hours Only
      </h1>
      <Countdown />
    </div>
    <div class="w-full bg-primary-600 py-12 flex items-center justify-center">
      <button
        class="py-5 px-9 rounded-full text-white bg-button font-sans font-medium tracking-[0.37px] text-base uppercase"
      >
        See new plans
      </button>
    </div>
  </section>
</template>

<script setup>
import Logo from "./Logo.vue";
import Countdown from "./countdown.vue";
</script>
