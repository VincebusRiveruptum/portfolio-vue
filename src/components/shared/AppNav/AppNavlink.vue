<script setup lang="ts">
import { computed } from "vue";
import { useRoute, type RouteRecordRaw } from "vue-router";

const emit = defineEmits(["click"]);

const props = defineProps<{
  type?: string;
  title?: string;
  to: RouteRecordRaw;
  active: boolean;
}>();

const route = useRoute();

const isCurrentRoute = computed(() => route.name === props.to?.name);
</script>

<template>
  <div class="text-center text-nowrap">
    <router-link
      v-if="(props.type === 'route' && props.to) || !isCurrentRoute"
      :to="props.to"
      class="hover:text-purple-600 font-semibold antialiased transition-all"
      :class="{ 'text-purple-500': props.active }"
      @click="$emit('click')"
      >{{ props.title ?? "route here!" }}</router-link
    >
    <button
      v-else
      class="hover:text-purple-600 font-semibold antialiased transition-all"
      :class="{ 'text-purple-500': props.active }"
      @click="$emit('click')"
    >
      {{ props.title ?? "Route here!" }}
    </button>
  </div>
</template>
