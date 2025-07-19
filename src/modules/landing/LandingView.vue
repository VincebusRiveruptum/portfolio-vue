<script setup lang="ts">
import ExpSection from "./components/sections/ExpSection.vue";
import MeSection from "./components/sections/MeSection.vue";
import PersonalInfoSection from "./components/sections/PersonalInfoSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <MeSection />
    <PersonalInfoSection />
    <SkillsSection />
    <ExpSection />
    <ProjectsSection/>
  </div>
</template>
