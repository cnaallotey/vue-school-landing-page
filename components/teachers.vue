<template>
  <div>
    <div class="w-full py-20 bg-[#f9fafe] font-sans">
      <div class="max-w-screen-xl mx-auto">
        <p class="text-gray-900 text-5xl font-sans text-center leading-10 font-normal">
          Our Teachers
        </p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
          <Teacher />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Teacher from "./teacher.vue";
</script>
