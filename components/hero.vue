<template>
  <section class="w-full bg-primary-500 pt-3">
    <nav class="max-w-screen-xl mx-auto px-4">
      <div class="w-full flex flex-row items-center justify-between">
        <Logo />
        <div>
          <ul
            class="inline-flex space-x-10 text-white font-sans font-medium uppercase text-xs tracking-tight"
          >
            <li>contact us</li>
            <li>Sign in</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="w-fit mx-auto mt-[25px]">
      <h1
        class="font-heading text-[140px] tracking-normal text-center text-white font-normal uppercase"
      >
        Black Friday sale
      </h1>
      <h1
        class="font-heading text-[109px] tracking-tight text-center -mt-10 text-white font-normal uppercase"
      >
        40% Off. 48 Hours Only
      </h1>
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
</script>
