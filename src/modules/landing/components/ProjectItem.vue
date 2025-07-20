<script setup lang="ts">
import { defineProps } from "vue";
import type { Tech } from "@/types/global";
import placeholder from "@/assets/placeholder.svg";
import AppTechButton from "@/components/shared/AppTechButton.vue";

const props = defineProps<{
  pictures?: Array;
  title: string;
  description: string;
  background?: string;
  techStack?: Tech[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div
      class="rounded-xl shadow-xl w-[80%] aspect-square"
      :class="[props.background]"
    >
      <img
        :src="props?.pictures ? props?.pictures[0] : placeholder"
        class="w-full h-full object-contain"
      />
    </div>

    <div class="flex flex-col gap-4">
      <h2>{{ props.title }}</h2>
      <div class="flex flex-row flex-wrap gap-4" v-if="techStack?.length > 0">
        <AppTechButton
          v-for="(tech, i) in techStack"
          :tech="tech"
          :key="i + '-tech'"
        />
      </div>
      <p class="mt-8">{{ props.description }}</p>
    </div>
  </div>
</template>
