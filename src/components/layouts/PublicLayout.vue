<script setup lang="ts">
import AppNavbar from "@/components/shared/AppNavbar.vue";
import AppFooter from "@/components/shared/AppFooter.vue";
</script>

<template>
  <div class="flex flex-col h-screen overflow-clip">
    <AppNavbar />
    <div class="flex flex-col h-full overflow-auto">
      <div class="grow">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
