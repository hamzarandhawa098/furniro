<template>
    <div class="flex items-center justify-between py-[30px] px-[54px] bg-white">
      <div class="flex items-center space-x-2">
        <img :src="logo" alt="Logo" class="w-[185px] h-[41px]" />
      </div>
  
      <nav class="hidden md:flex space-x-[75px]">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.href"
          class="font-poppins font-medium text-[16px] text-black"
        >
          {{ link.label }}
        </a>
      </nav>
  
      <div class="flex items-center space-x-[45px]">
        <button
          v-for="(icon, index) in icons"
          :key="index"
          :aria-label="icon.label"
        >
          <component :is="icon.component" />
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    logo: {
      type: String,
      required: true,
    },
    navLinks: {
      type: Array,
      required: true,
      default: () => [],
    },
    icons: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  </script>
  
  <style scoped></style>
  