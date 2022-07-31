<script setup>
const props = defineProps({
  name: String,
  role: String,
  img: String,
});
</script>

<template>
  <div>
    <div
      class="w-52 md:w-full h-full rounded-lg overflow-hidden bg-white border-2 border-gray-100"
    >
      <div class="w-full h-52 md:h-[230px] rounded-lg overflow-hidden relative">
        <div
          class="w-full h-full absolute top-0 bg-gradient-to-tl from-[#667dff] opacity-50"
        ></div>
        <img
          :src="
            !props.img
              ? 'https://vueschool.io/img/teachers/vueschool_vuejs_chris_fritz.jpg'
              : props.img
          "
          class="w-full h-full object-cover object-top"
          :alt="props.name"
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
