<script setup lang="ts">
import { useContact } from "@/modules/contact/composables/useContact";

const { form, isFormFilled, isPending, sendMessage } = useContact();
</script>

<template>
  <div class="flex flex-col gap-12 bg-white px-4 sm:py-[5%] sm:px-[15%] lg:px-[25%]">
    <h1>Contact</h1>

    <div class="flex flex-col gap-8">
      <p>
        If you're interested you can contact me directly by filling the form
        below.
      </p>

      <form class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <label>Subject</label>
          <input v-model="form.subject" name="subject" />
        </div>

        <div class="flex flex-col gap-2">
          <label>Message</label>
          <textarea v-model="form.body" name="body"> </textarea>
        </div>
        <button
          class="btn-primary sm:w-48 ml-auto"
          :disabled="!isFormFilled || isPending"
          type="button"
          @click="sendMessage()"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>
