<template>
  <section>
    <div class="w-full bg-primary-300 py-10 md:pb-32 px-4">
      <div class="text-center">
        <p class="text-[#b7b9c9] font-normal text-base font-circular lg:text-xl">
          Developers from major organisations learn Vue.js with us
        </p>
      </div>
      <div
        class="flex mt-5 flex-wrap items-center justify-center xl:justify-between max-w-screen-2xl mx-auto"
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
    <div class="max-w-4xl mx-auto -mt-5 md:-mt-20 pb-10 overflow-x-scroll scrollbar-hide">
      <div class="flex w-fit mx-auto justify-center space-x-6 px-4 md:px-0">
        <div
          class="flex flex-col w-[209px] lg:w-[250px] items-center shadow-lg py-8 bg-[#f9fafe] rounded-[10px]"
          v-for="stat in stats"
          :key="stats.indexOf(stat)"
        >
          <img :src="require(`~/assets/images/${stat.icon}`)" :alt="stat.caption" />

          <p class="text-5xl font-sans text-center text-primary-text mt-10">
            {{ stat.figure }}
          </p>
          <p class="text-lg font-sans text-center text-primary-text">
            {{ stat.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { caption: "Video Lessons", figure: "300", icon: "video.svg" },
  { caption: "Courses", figure: "20", icon: "hours.svg" },
  { caption: "Hours and Increasing", figure: "20", icon: "course.svg" },
]);

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
