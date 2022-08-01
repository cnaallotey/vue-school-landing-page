<template>
  <div>
    <div class="max-w-md lg:max-w-xl mx-auto bg-white rounded-lg mt-24">
      <div class="h-2 bg-cornflower-blue-500 w-full rounded-t-lg"></div>
      <img src="../assets/images/ufo.webp" class="w-32 -mt-20 mx-auto" alt="" />
      <p class="text-[24px] font-sans text-center text-gray-800 font-normal">
        <span class="font-medium">Yearly</span><span> Plan features</span>
      </p>
      <div class="mt-5 flex items-end justify-center font-sans">
        <div class="flex items-center space-x-2">
          <p
            class="font-extrabold font-circular line-through text-cornflower-blue-300 text-3xl"
          >
            $190
          </p>
          <p class="font-extrabold font-circular text-cornflower-blue-500 text-5xl">
            $114
          </p>
        </div>
        <p class="text-sm font-normal leading-5 text-gray-900 ml-2">/Save $76</p>
      </div>
      <div
        class="max-w-md mx-auto mt-5 pl-8 md:pl-20 pb-1 border-gray-200"
        v-for="feature in features"
        :key="features.indexOf(feature)"
        :class="
          features.indexOf(feature) + 1 == features.length ? 'boder-b-0' : 'border-b'
        "
      >
        <p class="text-base font-normal text-gray-600 inline-flex items-center space-x-2">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#67d553]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              /></svg
          ></span>
          <span>{{ feature }}</span>
        </p>
      </div>
      <div class="w-full flex justify-center mt-5">
        <button
          class="p-2 rounded-full text-white bg-cornflower-blue-500 hover:bg-cornflower-blue-600 uppercase inline-flex items-center pl-5 space-x-2"
        >
          <span class="font-medium">get this offer!</span>
          <span class="w-10 h-10 rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-19 p-2 bg-cornflower-blue-400 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              /></svg
          ></span>
        </button>
      </div>

      <p class="text-[10px] text-gray-900 text-regular leading-5 my-3 text-center">
        Join 60,000 others!
      </p>
      <div class="w-full py-[10px] bg-secondary-500 px-4 rounded-b-lg">
        <div class="w-fit mx-auto text-primary-500">
          <p class="font-extrabold font-circular text-lg text-center">
            Extended: Ends any minute
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  "22 Courses 300 Videos 20 Hours",
  "Source Code",
  "Stream or Download",
  "Exclusive Slack",
  "Content every week",
]);
</script>
