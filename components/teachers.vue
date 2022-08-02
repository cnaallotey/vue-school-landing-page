<template>
  <section>
    <div class="w-full py-10 md:py-20 bg-[#f9fafe] font-sans relative z-0">
      <div class="max-w-screen-xl mx-auto relative z-10">
        <p
          class="text-primary-text text-3xl lg:text-5xl font-circular font-medium text-center leading-10"
        >
          Our Teachers
        </p>
        <div
          class="mt-5 md:mt-10 flex flex-row space-x-5 md:space-x-0 overflow-x-scroll scrollbar-hide md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 px-4 md:px-12 lg:px-4"
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
      <img
        src="../assets/images/shinyrectange.svg"
        class="absolute left-0 bottom-20 z-0 rotate-180 hidden lg:block opacity-50"
        alt="rectangle"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Teacher from "./teacher.vue";

const teachers = ref([
  {
    name: "Alex Kyriakidis",
    role: "Co-founder, Software Engineer",
    img: "Alex.jpg",
  },
  {
    name: "Rolf Haug",
    role: "Co-founder, Software Engineer",
    img: "Rolf.jpeg",
  },
  {
    name: "Chris Fritz",
    role: "Co-founder, Software Engineer",
    img: "Chris.jpg",
  },
  {
    name: "Alexandre Chopin",
    role: "Teacher, Software Engineer",
    img: "Alexandre.jpeg",
  },
  {
    name: "Roman Cuba",
    role: "Teacher, Software Engineer",
    img: "Roman.jpg",
  },
  {
    name: "Sebastien Chopin",
    role: "Teacher, Software Engineer",
    img: "Sebastien.jpg",
  },
  {
    name: "Alexander Lichter",
    role: "Teacher, Software Engineer",
    img: "Alexander.png",
  },
  {
    name: "Lydia Hallie",
    role: "Teacher, Software Engineer",
    img: "Lydia.jpg",
  },
]);
</script>
