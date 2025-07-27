<script setup lang="ts">
import logo from "@/assets/logo.png";

import AppNavLinks from "./AppNav/AppNavLinks.vue";
import type { NavLink } from "../../types/global";

const props = defineProps<{
  currentOffset?: number;
}>();

const navLinks: NavLink[] = [
  {
    title: "Home",
    name: "home",
    type: "scroll",
    route: {
      name: "landing-page",
    },
    active: false,
  },
  {
    title: "Personal Information",
    name: "personal-info",
    type: "scroll",
    route: {
      name: "landing-page",
    },
    active: false,
  },
  {
    title: "Skills",
    name: "skills",
    type: "scroll",
    route: {
      name: "landing-page",
    },
    active: false,
  },
  {
    title: "Experience",
    name: "experience",
    type: "scroll",
    route: {
      name: "landing-page",
    },
    active: false,
  },
  {
    title: "Projects",
    name: "projects",
    type: "scroll",
    route: {
      name: "landing-page",
    },
    active: false,
  },
  {
    title: "Contact",
    name: "contact",
    type: "route",
    route: {
      name: "contact-view",
    },
    active: false,
  },
];
</script>
<template>
  <div
    class="flex flex-row bg-white items-center gap-4 justify-between h-[90px] relative shadow-xl py-2 px-[8%]"
  >
    <div class="flex flex-row">
      <img class="w-14 aspect-square" :src="logo" alt="vincebus-logo" />
    </div>

    <div class="flex flex-row gap-8">
      <AppNavLinks :current-offset="props.currentOffset" :links="navLinks" />
    </div>
  </div>
</template>
