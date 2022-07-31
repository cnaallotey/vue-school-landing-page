<template>
  <section class="w-full bg-primary-500 pt-3">
    <Navbar />
    <div class="w-fit mx-auto mt-[50px] lg:mt-[25px]">
      <h1
        class="font-heading text-[56px] md:text-[100px] lg:text-[140px] tracking-normal text-center text-white font-normal uppercase"
      >
        Black Friday sale
      </h1>
      <h1
        class="font-heading text-[44px] md:text-[79px] lg:text-[109px] tracking-tight text-center -mt-5 md:-mt-10 lg:-mt-12 text-white font-normal uppercase"
      >
        40% Off. 48 Hours Only
      </h1>
      <Countdown />
    </div>
    <div class="w-full bg-primary-600 py-8 md:py-12 flex items-center justify-center">
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
import Navbar from "./navbar.vue";
</script>
