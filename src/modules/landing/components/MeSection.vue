<script setup lang="ts">
import myself from "@/assets/me.png";
import cl from "@/assets/cl.png";
import { GithubIcon, LinkedinIcon } from "lucide-vue-next";
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-12 bg-gray-100 px-4 sm:py-[5%] sm:px-[15%]"
  >
    <div class="m-auto">
      <img
        class="w-[80%] aspect-square drop-shadow-2xl rounded-xl"
        :src="myself"
        alt="yep thats me"
      />
    </div>

    <div class="flex flex-col gap-8">
      <h1>VICENTE RIVEROS GARAY</h1>
      <div class="flex flex-row items-center gap-4">
        <img :src="cl" alt="Chile" class="w-8" />
        <h3>Full Stack Developer & IT Engineer</h3>
      </div>
      <div>
        <p>
          I'm a Full-stack developer from Chile with 1+ year experience in the
          field, a professional developer with a good set of problem solving and
          technical experience.
        </p>
      </div>
      <div class="flex flex-row items-center gap-8">
        <GithubIcon class="hover:scale-110 transition-all" />
        <LinkedinIcon class="hover:scale-110 transition-all" />
      </div>

      <button class="btn-primary">Contact me</button>
    </div>
  </div>
</template>
