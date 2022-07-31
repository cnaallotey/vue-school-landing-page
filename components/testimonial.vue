<template>
  <div class="w-full">
    <div class="max-w-screen-xl mx-auto py-20 px-4">
      <div
        class="w-full flex flex-col md:flex-row md:space-x-16 lg:space-x-32 space-y-10 md:space-y-2"
      >
        <div
          class="w-full md:w-56 h-[257px]shadow-lg drop-shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src="https://vueschool.io/img/teachers/vueschool_vuejs_chris_fritz.jpg"
            class="w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div class="flex-1">
          <svg
            class="w-8 lg:w-12 h-auto"
            viewBox="0 0 51 46"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 0v23c0 12.683-9.868 23-22 23v-7.667c8.087 0 14.667-6.878 14.667-15.333H0V0h22zm29 0v23c0 12.683-9.868 23-22 23v-7.667c8.087 0 14.667-6.878 14.667-15.333H29V0h22z"
              fill="#667DFF"
              fill-rule="nonzero"
              opacity=".2"
            />
          </svg>
          <p
            class="text-gray-900 font-normal leading-5 md:leading-6 lg:leading-9 text-xs md:text-base lg:text-lg font-sans mt-5"
          >
            Even if you've read through every word of the Vue docs, there's no substitute
            for real experience building an app, making decisions, weighing pros and cons,
            and refactoring as requirements change. Courses like these give you a head
            start, helping you avoid some of the most common mistakes!
          </p>
          <div class="w-full flex justify-end mt-3">
            <p class="text-sm font-sans text-gray-800 font-normal leading-7">
              - <span class="font-medium">Chris Fritz. </span>Author of Vue.js Docs
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
