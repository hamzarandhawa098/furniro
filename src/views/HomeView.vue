<template>
  <Navbar :logo="Logo" :navLinks="navLinks" :icons="icons" />
  <HeroBanner 
  newArrivalText="New Arrival"
  titleText="Discover Our New Collection"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  buttonText="Buy Now"
  :bgImage="HeroBannerImg"
  />
</template>
<script setup>
import {ref} from "vue";
import Navbar from "@/components/global/Navbar.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import CartIcon from "@/components/icons/CartIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import LikeIcon from "@/components/icons/LikeIcon.vue";
import Logo from "@/assets/images/Logo.png"
import HeroBanner from "@/components/HomeView/HeroBanner.vue";
import HeroBannerImg from "@/assets/images/HeroBanner.png";


const navLinks = ref([
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
]);

const icons = ref([
  { label: "User", component: ProfileIcon },
  { label: "Search", component: SearchIcon },
  { label: "Favorites", component: LikeIcon },
  { label: "Cart", component: CartIcon },
]);

</script>
