<template>
  <div class="w-full font-sans">
    <div class="w-full bg-[#4152b3] py-[72px] px-4">
      <div class="max-w-2xl mx-auto flex flex-col items-center">
        <p class="text-white font-secondary-heading text-3xl lg:text-5xl leading-10 text-center font-normal">
          Stay in the loop!
        </p>
        <p
          class="text-cornflower-blue-200 leading-6 text-lg text-center font-medium mt-6"
        >
          Stay up to date with Vue 3 release, tutorials, and video courses.
        </p>
        <form class="w-full mt-10">
          <label
            for="newsletter-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >Email</label
          >
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block p-[17px] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-cornflower-blue-500 focus:border-cornflower-blue-500"
              placeholder="Your Email"
              required
            />
            <button
              class="absolute top-1 right-1 inline-flex items-center space-x-2 py-3 px-8 rounded-full bg-cornflower-blue-900 font-medium font-sans text-[#4bbbff] uppercase tracking-[0.37px]"
            >
              <span>keep me posted</span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-send w-4 h-4"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg
              ></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
