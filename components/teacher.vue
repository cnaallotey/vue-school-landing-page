<script setup>
const props = defineProps({
  name: String,
  role: String,
  img: String,
});
</script>

<template>
  <div>
    <div class="w-full rounded-lg overflow-hidden bg-white border-2 border-gray-100">
      <div class="w-full h-[230px] rounded-lg overflow-hidden">
        <img
          :src="!props.img ? '/_nuxt/assets/images/chris.webp' : props.img"
          class="w-full h-full object-cover object-center"
          alt="teacher"
        />
      </div>
      <div class="w-full p-6">
        <p class="text-xl font-medium leading-6">{{ props.name }}</p>
        <p class="text-sm font-normal leading-6 mt-1 text-gray-500">
          {{ props.role }}
        </p>
      </div>
    </div>
  </div>
</template>
