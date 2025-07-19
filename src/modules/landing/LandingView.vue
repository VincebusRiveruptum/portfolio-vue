<script setup lang="ts">
import ExpSection from "./components/ExpSection.vue";
import MeSection from "./components/MeSection.vue";
import PersonalInfoSection from "./components/PersonalInfoSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <MeSection />
    <PersonalInfoSection />
    <SkillsSection />
    <ExpSection />
  </div>
</template>
