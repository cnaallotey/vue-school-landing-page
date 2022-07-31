<template>
  <div class="relative overflow-hidden">
    <div
      class="w-full py-10 md:py-20 bg-gradient-to-b from-[#1da1f2] to-[#1b96e0] relative pb-40 md:pb-20"
    >
      <div
        class="w-fit mx-auto flex flex-col md:flex-row items-center md:space-x-5 space-y-5 md:space-y-0 relative z-10"
      >
        <p
          class="font-circular text-white text-3xl md:text-[40px] lg:text-5xl leading-10 font-normal"
        >
          Share the love!
        </p>
        <button
          class="p-2 rounded-full text-[#1da1f2] bg-gray-800 uppercase inline-flex font-sans items-center pl-8 space-x-5"
        >
          <span class="font-medium">tweet</span>
          <span
            class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center"
          >
            <svg
              class="h-6 w-6 bg-gray-600 rounded-full"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.75 5.96017C21.0328 6.26954 20.2524 6.4922 19.4485 6.57892C20.2831 6.08306 20.9081 5.2997 21.2063 4.37579C20.4231 4.8417 19.5651 5.16841 18.6703 5.34142C18.2964 4.94163 17.8441 4.62315 17.3417 4.40581C16.8392 4.18847 16.2974 4.07693 15.75 4.07813C13.5352 4.07813 11.7539 5.87345 11.7539 8.07657C11.7539 8.38595 11.7914 8.69532 11.8524 8.99298C8.53596 8.81954 5.57815 7.23517 3.61174 4.80938C3.25344 5.42137 3.06568 6.1182 3.06799 6.82735C3.06799 8.21485 3.77346 9.43829 4.84924 10.1578C4.21527 10.1329 3.59614 9.9586 3.04221 9.64923V9.69845C3.04221 11.6414 4.41565 13.2516 6.24612 13.6219C5.90243 13.7112 5.54887 13.7568 5.19377 13.7578C4.93362 13.7578 4.68752 13.732 4.43909 13.6969C4.94534 15.2813 6.41956 16.432 8.17502 16.4695C6.80159 17.5453 5.08127 18.1781 3.21331 18.1781C2.87815 18.1781 2.56877 18.1664 2.24768 18.1289C4.01956 19.2656 6.1219 19.9219 8.38596 19.9219C15.736 19.9219 19.7578 13.8328 19.7578 8.54767C19.7578 8.37423 19.7578 8.20079 19.7461 8.02735C20.5242 7.45782 21.2063 6.75235 21.75 5.96017Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
      </div>
      <img
        src="../assets/images/lovetwitter.webp"
        class="absolute bottom-0 right-0 md:right-20 w-[320px] translate-y-20"
        alt=""
      />
    </div>
  </div>
</template>
