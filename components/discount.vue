<template>
  <section>
    <div
      class="w-full bg-cornflower-blue-500 font-sans relative overflow-hidden pb-44 md:pb-0"
    >
      <div
        class="max-w-screen-xl mx-auto py-10 md:py-16 lg:py-28 px-4 md:px-12 lg:px-4 flex flex-col items-center md:items-start relative z-10"
      >
        <div class="w-full flex flex-col items-center md:items-start">
          <p
            class="text-white font-circular text-3xl md:text-[40px] lg:text-5xl leading-snug font-normal max-w-lg text-center md:text-left lg:max-w-2xl"
          >
            What are you waiting for?
          </p>

          <p
            class="text-cornflower-blue-200 leading-6 text-lg font-medium text-center md:text-left mt-4 lg:mt-6 md:max-w-sm max-w-lg"
          >
            This is the lowest price it will get
          </p>
        </div>

        <button
          class="px-6 py-4 text-cornflower-blue-500 bg-white hover:bg-cornflower-blue-600 hover:text-white rounded-full uppercase inline-flex items-center mt-10 lg:mt-16 font-medium text-sm leading-5 space-x-2"
        >
          <span>Secure your discount</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          ><span></span>
        </button>
      </div>

      <img
        src="../assets/images/vrgoggle.svg"
        class="absolute bottom-0 right-0 -mt-32 md:mt-10 w-[600px] md:w-[500px] lg:w-[800px] translate-y-1/3 lg:translate-y-1/4 z-0 md:translate-x-32"
        alt=""
      />
    </div>
  </section>
</template>
