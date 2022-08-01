<template>
  <div class="w-full mt-10 md:mt-20 font-sans">
    <div class="w-full bg-primary-500 px-4 py-[34px] lg:pb-16">
      <div class="max-w-screen-lg mx-auto relative">
        <div class="w-fit absolute top-1/3 left-0 hidden md:block">
          <div
            class="text-white font-marker text-xl font-bold text-center -rotate-12 uppercase"
          >
            <p>100%</p>
            <p class="text-sm">money back guarantee</p>
          </div>
          <img src="../assets/images/arrow.webp" class="w-24 mx-auto mt-4" alt="" />
        </div>
        <div class="w-fit absolute bottom-32 md:right-5 lg:right-10 hidden md:block">
          <img
            src="../assets/images/arrow.webp"
            class="w-24 mx-0 mb-4 rotate-180 -ml-8"
            alt=""
          />
          <div
            class="text-white font-marker text-sm font-bold text-center -rotate-12 uppercase"
          >
            <p>courses for all</p>
            <p class="text-sm">skill levels</p>
          </div>
        </div>

        <div class="w-fit mx-auto">
          <h2
            class="font-circular font-medium text-2xl md:text-[40px] lg:text-4xl text-white pb-2 border-b-2 border-secondary-500"
          >
            40% Off - Limited Time Offer
          </h2>
        </div>
        <div class="mx-auto w-fit mt-10">
          <div
            class="w-full p-[6px] flex rounded-full bg-primary-700 bg-opacity-100 text-[13px]"
          >
            <button
              class="py-3 px-2 md:px-8 rounded-full bg-heliotrope-500 font-medium font-sans text-white uppercase tracking-[0.37px]"
            >
              yearly plan
            </button>
            <button
              class="py-3 px-2 md:px-8 rounded-full font-medium font-sans text-[#7f7fd6] uppercase tracking-[0.37px]"
            >
              Lifetime plan
            </button>
            <button
              class="py-3 px-2 md:px-8 rounded-full font-medium font-sans text-[#7f7fd6] uppercase tracking-[0.37px]"
            >
              3 months
            </button>
          </div>
        </div>
        <Pricecard />
      </div>
    </div>
  </div>
</template>

<script setup>
import Pricecard from "./pricecard.vue";
</script>
