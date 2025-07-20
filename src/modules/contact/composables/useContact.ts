import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, options } from "@/constants/config";
import type { ContactForm } from "@/types/global";
import Swal from "sweetalert2";
import { router } from "../../../router";

const setForm = () => {
  return {
    subject: "",
    body: "",
  };
};

const useContact = () => {
  const isError = ref<boolean | undefined>();
  const isPending = ref<boolean | undefined>();
  const form = ref<ContactForm>(setForm());

  const isFormFilled = computed(
    () =>
      form.value.subject &&
      form.value.subject.trim() != "" &&
      form.value.body &&
      form.value.body.trim() != ""
  );

  const sendMessage = async () => {
    try {
      isPending.value = true;
      await emailjs.sendForm(serviceId, templateId, form.value.body, options);
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message delivered!",
        timer: 3000,
      });
      router.push({ name: "landing-page" });
    } catch (err) {
      isError.value = true;
      console.error(err);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Oops, there was a problem!",
        timer: 3000,
      });
    } finally {
      isPending.value = false;
    }
  };

  return {
    form,
    isFormFilled,
    isError,
    isPending,

    sendMessage,
  };
};

export { useContact };
