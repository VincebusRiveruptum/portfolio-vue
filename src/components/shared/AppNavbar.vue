<script setup lang="ts">
import logo from "@/assets/logo.png";
import AppNavlink from "@/components/shared/AppNavlink.vue";
</script>
<template>
  <div
    class="flex flex-row bg-white items-center gap-4 justify-between h-[100px] relative shadow-xl py-2 px-[4%]"
  >
    <div class="flex flex-row">
      <img class="w-16 aspect-square" :src="logo" alt="vincebus-logo" />
    </div>

    <div class="flex flex-row">
      <AppNavlinkNavLink title="Home" type="scroll" />
      <AppNavlinkNavLink title="Personal Information" type="scroll" />
      <AppNavlinkNavLink title="Skills" type="scroll" />
      <AppNavlinkNavLink title="Experience" type="scroll" />
      <AppNavlinkNavLink title="Projects" type="scroll" />
      <AppNavlinkNavLink
        title="Contact"
        type="route"
        :to="{ name: 'contact' }"
      />
    </div>
  </div>
</template>
