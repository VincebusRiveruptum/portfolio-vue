<script setup lang="ts">
import { defineProps } from "vue";
import placeholder from "@/assets/placeholder.svg";

const props = defineProps<{
  pictures?: Array;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="rounded-xl shadow-xl w-[80%] aspect-square">
      <img
        :src="props?.pictures ? props?.pictures[0] : placeholder"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="flex flex-col gap-4">
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
