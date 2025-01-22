<template>
  <section
    class="relative flex items-end justify-end bg-cover bg-center pb-[105px] px-[58px]"
    :style="{ backgroundImage: `url(${bgImage})`, height: '713px' }"
  >
    <div class="bg-secondary-color w-[643px] pt-[62px] rounded-[10px] pl-[39px] pr-[83px] pb-[37px]">
      <div class="max-w-[561px]">
        <p class="font-poppins font-semibold uppercase text-[16px] tracking-[3px] text-subtitle-text">{{ newArrivalText }}</p>
        <h1 class="font-poppins font-bold text-[52px] uppercase leading-[65px] text-primary-color">
          {{ titleText }}
        </h1>
        <p class="mt-[17px] font-poppins font-medium text-[18px] leading-[24px] text-subtitle-text">
        {{ text }}
        </p>
        <div class="mt-[46px]">
          <Button>{{ buttonText }}</Button>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
defineProps({
  newArrivalText: String,
  titleText: String,
  text: String,
  buttonText: String,
  bgImage: String,
})



</script>

<style scoped></style>
