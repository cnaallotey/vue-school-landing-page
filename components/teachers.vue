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
          class="mt-10 flex flex-row space-x-6 overflow-x-scroll scrollbar-hide md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
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
  { name: "Rolf Haug", role: "Co-founder, Software Engineer", img: "" },
  {
    name: "Chris Fritz",
    role: "Co-founder, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_chris_fritz.jpg",
  },
  { name: "Alexandre Chopin", role: "Teacher, Software Engineer", img: "" },
  {
    name: "Roman Cuba",
    role: "Teacher, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_roman_kuba.jpg",
  },
  { name: "Sebastien Chopin", role: "Teacher, Software Engineer", img: "" },
  { name: "Alexander Lichter", role: "Teacher, Software Engineer", img: "" },
  {
    name: "Lydia Hallie",
    role: "Teacher, Software Engineer",
    img: "https://vueschool.io/img/teachers/vueschool_vuejs_lydia_hallie.jpg",
  },
]);
</script>
