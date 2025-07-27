<script setup lang="ts">
import ExpSection from "./components/sections/ExpSection.vue";
import MeSection from "./components/sections/MeSection.vue";
import PersonalInfoSection from "./components/sections/PersonalInfoSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
//import TechSection from "./components/sections/TechSection.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <MeSection id="home"/>
    <PersonalInfoSection  id="personal-info"/>
    <SkillsSection id="skills" />

    <!--
    <TechSection />
    -->
    <ExpSection id="experience"/>
    <ProjectsSection id="projects"/>
  </div>
</template>
