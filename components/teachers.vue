<template>
  <div>
    <div class="w-full py-20 bg-[#f9fafe] font-sans">
      <div class="max-w-screen-xl mx-auto">
        <p
          class="text-gray-900 text-3xl lg:text-5xl font-circular font-medium text-center leading-10"
        >
          Our Teachers
        </p>
        <div
          class="mt-8 md:mt-10 flex flex-row space-x-5 md:space-x-0 overflow-x-scroll scrollbar-hide md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 px-4"
        >
          <Teacher
            v-for="teacher in teachers"
            :key="teacher.name"
            :name="teacher.name"
            :role="teacher.role"
            :img="teacher.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Teacher from "./teacher.vue";

const teachers = ref([
  {
    name: "Alex Kyriakidis",
    role: "Co-founder, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_alex_kyriakidis.jpg",
  },
  {
    name: "Rolf Haug",
    role: "Co-founder, Software Engineer",
    img: "https://avatars.githubusercontent.com/u/306927?v=4",
  },
  {
    name: "Chris Fritz",
    role: "Co-founder, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_chris_fritz.jpg",
  },
  {
    name: "Alexandre Chopin",
    role: "Teacher, Software Engineer",
    img: "https://miro.medium.com/fit/c/176/176/1*U1PmLpfVIC_62mUKIVMNRQ.jpeg",
  },
  {
    name: "Roman Cuba",
    role: "Teacher, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_roman_kuba.jpg",
  },
  {
    name: "Sebastien Chopin",
    role: "Teacher, Software Engineer",
    img: "https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg",
  },
  {
    name: "Alexander Lichter",
    role: "Teacher, Software Engineer",
    img: "https://www.lichter.io/assets/icons/icon_512x512.928fac.png",
  },
  {
    name: "Lydia Hallie",
    role: "Teacher, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_lydia_hallie.jpg",
  },
]);
</script>
