<script setup lang="ts">
import AppNavbar from '@/components/shared/AppNavbar.vue';
</script>

<template>
  <div class="flex flex-col h-screen overflow-clip">
    <AppNavbar />
    <div class="flex flex-col h-full overvlow-scroll">
      <router-view />
    </div>
  </div>
</template>
