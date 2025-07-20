import type { Component } from "vue";

export type Tech = {
  id: number;
  name: string;
  longName?: string;
  uri?: string;
  icon?: Component | string;
  logo?: string;
};

export type ContactForm = {
  subject?: string;
  body: string;
};
