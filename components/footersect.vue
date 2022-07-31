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
  <div
    class="w-full bg-gradient-to-br from-[#2d3765] to-[#1e264a] py-4 md:py-16 lg:py-24 md:pb-[59px] px-4"
  >
    <div class="max-w-screen-xl mx-auto">
      <div class="hidden md:grid grid-cols-4">
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
                <a href="#">
                  <img src="../assets/images/facebook-grey-16-copy-24.svg" alt="facebook"
                /></a>
                <a href="#"
                  ><img
                    src="../assets/images/instagram-grey-16-copy-24.svg"
                    alt="instagram"
                /></a>
                <a href="#"
                  ><img src="../assets/images/twitter-grey-16-copy-24.svg" alt="twitter"
                /></a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full md:mt-20 flex items-center justify-between">
        <div class="w-fit flex items-center space-x-4">
          <img src="../assets/images/logo-white.svg" alt="" />
          <p
            class="text-xs font-sans text-footerText select-none cursor-default font-normal leading-5 hidden md:block"
          >
            © Vue School 2019. All rights reserved
          </p>
        </div>
        <div class="w-fit">
          <ul
            class="inline-flex text-xs font-sans text-footerText font-normal space-x-2 leading-5"
          >
            <li><a href="#">Privacy Policy</a></li>
            <li>.</li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
