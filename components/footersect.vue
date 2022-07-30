<script setup>
import { ref } from "vue";

const menu = ref([
  {
    title: "Product",
    menuLinks: [{ name: "About us" }, { name: "Career" }, { name: "Contact" }],
  },
  {
    title: "Discuss",
    menuLinks: [{ name: "Forum" }, { name: "Blog" }, { name: "Support" }],
  },
  {
    title: "Extras",
    menuLinks: [{ name: "Testimonial" }, { name: "FAQ" }, { name: "Career" }],
  },
]);
</script>

<template>
  <div class="w-full bg-gradient-to-br from-[#2d3765] to-[#1e264a] py-24 pb-[59px]">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-4">
        <div class="w-full" v-for="menusection in menu" :key="menusection.title">
          <p class="uppercase font-sans font-medium text-xs text-footerText leading-5">
            {{ menusection.title }}
          </p>
          <ul class="space-y-5 mt-6 text-white text-sm font-sans font-normal leading-6">
            <li v-for="menuLink in menusection.menuLinks" :key="menuLink.name">
              <a href="#"> {{ menuLink.name }}</a>
            </li>
          </ul>
        </div>
        <div class="w-full">
          <p class="uppercase font-sans font-medium text-xs text-footerText leading-5">
            Get in Touch
          </p>
          <ul class="space-y-5 mt-6 text-white text-sm font-sans font-normal leading-6">
            <li>+1 399 120 04 01</li>
            <li>info@vueschool.com</li>
            <li>
              <div class="flex items-center space-x-7">
                <img src="../assets/images/facebook-grey-16-copy-24.svg" alt="facebook" />
                <img
                  src="../assets/images/instagram-grey-16-copy-24.svg"
                  alt="instagram"
                />
                <img src="../assets/images/twitter-grey-16-copy-24.svg" alt="twitter" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full mt-20 flex items-center justify-between">
        <div class="w-fit flex items-center space-x-4">
          <img src="../assets/images/logo-white.svg" alt="" />
          <p class="text-xs font-sans text-footerText font-normal leading-5">
            © Vue School 2019. All rights reserved
          </p>
        </div>
        <div class="w-fit">
          <ul
            class="inline-flex text-xs font-sans text-footerText font-normal space-x-2 leading-5"
          >
            <li>Privacy Policy</li>
            <li>.</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
