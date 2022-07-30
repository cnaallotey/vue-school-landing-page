<template>
  <div class="w-full my-10">
    <div class="w-fit mx-auto flex items-center space-x-2">
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-6xl font-sans font-semibold text-primary-500">
              {{ countdown.days }}
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Days</p>
      </div>
      <p class="text-secondary-500 font-sans text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-6xl font-sans font-semibold text-primary-500">
              {{ countdown.hours }}
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Hours</p>
      </div>
      <p class="text-secondary-500 font-sans text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-6xl font-sans font-semibold text-primary-500">
              {{ countdown.minutes }}
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Minutes</p>
      </div>
      <p class="text-secondary-500 font-sans text-5xl font-normal -mt-6">:</p>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 relative">
          <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-1/2 bg-secondary-600"></div>
            <div class="w-full h-1/2 bg-secondary-900"></div>
          </div>
          <div class="w-full absolute inset-1 h-full flex items-center justify-center">
            <p class="text-6xl font-sans font-semibold text-primary-500">
              {{ countdown.seconds }}
            </p>
          </div>
        </div>
        <p class="text-xs font-sans font-normal text-white mt-1">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import moment from "moment";

const countdown = reactive({ days: "", hours: "", minutes: "", seconds: "" });

var interval = 1000;

setInterval(function () {
  const x = new moment();
  const y = new moment("2022-08-01T00:00:00+02:00");
  countdown.days = moment.duration(y.diff(x)).days();
  countdown.hours = moment.duration(y.diff(x)).hours();
  countdown.minutes = moment.duration(y.diff(x)).minutes();
  countdown.seconds = moment.duration(y.diff(x)).seconds();
}, interval);
</script>
