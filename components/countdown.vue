<template>
  <div class="w-full my-10">
    <div class="w-fit mx-auto flex items-center space-x-2">
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 lg:w-24 lg:h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-4xl lg:text-6xl font-sans font-medium text-primary-500">
              <!-- check if countdown has exceeded 0 -->
              <span v-if="countdown.days > 0"
                ><span v-if="countdown.days < 10">0</span>{{ countdown.days }}</span
              >
              <span v-else>00</span>
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Days</p>
      </div>
      <p class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 lg:w-24 lg:h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-4xl lg:text-6xl font-sans font-medium text-primary-500">
              <!-- check if countdown has exceeded 0 -->
              <span v-if="countdown.hours > 0"
                ><span v-if="countdown.hours < 10">0</span>{{ countdown.hours }}</span
              >
              <span v-else>00</span>
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Hours</p>
      </div>
      <p class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 lg:w-24 lg:h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-4xl lg:text-6xl font-sans font-medium text-primary-500">
              <!-- check if countdown has exceeded 0 -->
              <span v-if="countdown.minutes > 0"
                ><span v-if="countdown.minutes < 10">0</span>{{ countdown.minutes }}</span
              >
              <span v-else>00</span>
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Minutes</p>
      </div>
      <p class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 lg:w-24 lg:h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-4xl lg:text-6xl font-sans font-medium text-primary-500">
              <!-- check if countdown has exceeded 0 -->
              <span v-if="countdown.seconds > 0"
                ><span v-if="countdown.seconds < 10">0</span>{{ countdown.seconds }}
              </span>
              <span v-else>00</span>
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import moment from "moment";

const countdown = reactive({ days: "", hours: "", minutes: "", seconds: "" });

var interval = 1000;

//getting current date and time and finding the difference to specified data and time
onMounted(() => {
  setInterval(function () {
    const x = new moment();
    const y = new moment("2022-08-01T00:00:00+02:00");
    countdown.days = moment.duration(y.diff(x)).days();
    countdown.hours = moment.duration(y.diff(x)).hours();
    countdown.minutes = moment.duration(y.diff(x)).minutes();
    countdown.seconds = moment.duration(y.diff(x)).seconds();
  }, interval);
});
</script>
