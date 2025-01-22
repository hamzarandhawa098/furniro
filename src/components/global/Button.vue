<template>
    <button
      :class="[
        'text-[16px] uppercase font-poppins font-bold text-white',
        backgroundColor,
        customClasses
      ]"
      @click="handleClick"
    >
      <slot>Default Text</slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  defineProps({
    backgroundColor: {
      type: String,
      default: "bg-primary-color",
    },
    customClasses : {
        type: String,
        default: "py-[25px] px-[72px]"
    }
   
  });
  
  const emit = defineEmits(["click"]);
  
  const handleClick = () => {
    emit("click");
  };
  </script>
  
  <style scoped></style>
  