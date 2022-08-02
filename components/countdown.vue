<template>
  <div class="w-full my-10">
    <div class="w-fit mx-auto flex items-center space-x-2">
      <Timer type="Days" :time="countdown.days" />
      <p
        class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6"
        :class="blink && countdown.seconds < 0 ? 'invisible' : 'visible'"
      >
        :
      </p>
      <Timer type="Hours" :time="countdown.hours" />
      <p
        class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6"
        :class="blink && countdown.seconds < 0 ? 'invisible' : 'visible'"
      >
        :
      </p>

      <Timer type="Minutes" :time="countdown.minutes" />
      <p
        class="text-secondary-500 font-sans text-3xl lg:text-5xl font-normal -mt-6"
        :class="blink && countdown.seconds < 0 ? 'invisible' : 'visible'"
      >
        :
      </p>
      <Timer type="Seconds" :time="countdown.seconds" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import moment from "moment";
import Timer from "./timer.vue";

const countdown = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 });

var interval = 1000;

//blinking animation when specified time elapses
const blink = ref(false);

const blinking = () => {
  setInterval(() => {
    blink.value = !blink.value;
  }, interval / 2);
};

onMounted(() => {
  //getting current date and time and finding the difference to specified data and time
  setInterval(function () {
    const x = new moment();
    const y = new moment("2022-08-01T00:00:00+02:00");
    countdown.days = moment.duration(y.diff(x)).days();
    countdown.hours = moment.duration(y.diff(x)).hours();
    countdown.minutes = moment.duration(y.diff(x)).minutes();
    countdown.seconds = moment.duration(y.diff(x)).seconds();
  }, interval);
  blinking();
});
</script>
