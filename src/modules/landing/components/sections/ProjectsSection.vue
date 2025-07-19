<script setup lang="ts">
import { projects } from "@/constants/data";
import ProjectItem from "../ProjectItem.vue";
</script>
<template>
  <div class="flex flex-col gap-12 bg-gray-100 px-4 sm:py-[5%] sm:px-[15%]">
    <ProjectItem
      v-for="(project, i) in projects"
      :key="'project' + i"
      :title="project?.title"
      :description="project?.description"
      :tech-stack="project?.techStack"
    />
  </div>
</template>
