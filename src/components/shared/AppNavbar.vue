<script setup lang="ts">
import logo from "@/assets/logo.png";
import AppNavlink from "@/components/shared/AppNavlink.vue";
</script>
<template>
  <div
    class="flex flex-row bg-white items-center gap-4 justify-between h-[90px] relative shadow-xl py-2 px-[8%]"
  >
    <div class="flex flex-row">
      <img class="w-14 aspect-square" :src="logo" alt="vincebus-logo" />
    </div>

    <div class="flex flex-row gap-8">
      <AppNavlink title="Home" type="scroll" :to="{ name: 'landing-page' }" />
      <AppNavlink
        title="Personal Information"
        type="scroll"
        :to="{ name: 'landing-page' }"
      />
      <AppNavlink title="Skills" type="scroll" :to="{ name: 'landing-page' }" />
      <AppNavlink
        title="Experience"
        type="scroll"
        :to="{ name: 'landing-page' }"
      />
      <AppNavlink
        title="Projects"
        type="scroll"
        :to="{ name: 'landing-page' }"
      />
      <AppNavlink title="Contact" type="route" :to="{ name: 'contact-view' }" />
    </div>
  </div>
</template>
