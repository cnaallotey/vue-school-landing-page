<script setup>
const props = defineProps({
  type: String,
  time: Number,
});
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="w-16 h-16 lg:w-24 lg:h-24 relative">
        <div class="flex flex-col space-y-0.5 w-full h-full rounded-md overflow-hidden">
          <div class="w-full h-1/2 bg-secondary-600"></div>
          <div class="w-full h-1/2 bg-secondary-900"></div>
        </div>
        <div class="w-full absolute inset-0 h-full flex items-center justify-center">
          <p class="text-4xl lg:text-6xl font-sans font-medium text-primary-500">
            <!-- check if countdown has exceeded 0 -->
            <span v-if="props.time > 0"
              ><span v-if="props.time < 10">0</span>{{ props.time }}</span
            >
            <span v-else>00</span>
          </p>
        </div>
      </div>
      <p class="text-xs font-sans font-normal text-white mt-1">{{ props.type }}</p>
    </div>
  </div>
</template>
