<template>
  <div class="w-full py-[45px] bg-[#1f264a] px-4">
    <div class="w-full">
      <div class="text-center">
        <p class="font-circular text-white font-normal text-center text-base lg:text-xl">
          Join other experts in learning
        </p>
      </div>
      <div
        class="flex mt-5 flex-wrap items-center justify-center xl:justify-between max-w-screen-2xl mx-auto saturate-10"
      >
        <img
          v-for="logo in logos"
          :key="logos.indexOf(logo)"
          :src="require(`~/assets/images/${logo.Image}`)"
          class="m-4 h-6 md:h-8"
          :alt="logo.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const logos = ref([
  {
    name: "trivago",
    Image: "trivagologo.svg",
  },
  {
    name: "Canon",
    Image: "canonlogo.svg",
  },
  {
    name: "Visa",
    Image: "visalogo.svg",
  },
  {
    name: "Mocrosoft",
    Image: "microsoftlogo.svg",
  },
  {
    name: "Gitlab",
    Image: "gitlab.svg",
  },
  {
    name: "Nintendo",
    Image: "nintendologo.svg",
  },
  {
    name: "Takeaway",
    Image: "takawaylogo.webp",
  },
  {
    name: "Maersk",
    Image: "maersklogo.svg",
  },
]);
</script>
