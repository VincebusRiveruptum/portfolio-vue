<script setup lang="ts">
import logo from "@/assets/logo.png";

import AppNavLinks from "./AppNav/AppNavLinks.vue";
import type { NavLink } from "../../types/global";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();

const props = defineProps<{
  currentOffset?: number;
}>();

const mainSection = ref<HTMLElement | null>();

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

const scrollUp = () => {
  mainSection.value.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  mainSection.value = document.getElementById("main");
});
</script>
<template>
  <div
    class="relative flex flex-row bg-background items-center gap-4 justify-between h-[90px] shadow-xl py-2 px-[8%] dark:shadow-none"
  >
    <div class="flex flex-row">
      <img
        class="w-14 aspect-square dark:invert"
        :src="logo"
        alt="vincebus-logo"
      />
    </div>

    <div class="flex flex-row gap-8">
      <AppNavLinks
        class="hidden sm:flex"
        :current-offset="props.currentOffset"
        :links="navLinks"
      />

      <div class="sm:hidden">
        <router-link
          v-if="route.name === 'landing-page'"
          :to="navLinks[5].route"
          class="btn-primary font-semibold !bg-purple-500"
          @click="scrollUp()"
        >
          Contact
        </router-link>

        <router-link
          v-if="route.name === 'contact-view'"
          :to="navLinks[1].route"
          class="btn-primary font-semibold !bg-purple-500"
          @click="scrollUp()"
        >
          Home
        </router-link>
      </div>
    </div>
  </div>
</template>
