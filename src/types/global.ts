import type { Component } from "vue";
import type { RouteRecordRaw } from "vue-router";

export type Tech = {
  id: number;
  name: string;
  longName?: string;
  uri?: string;
  icon?: Component | string;
  logo?: string;
};

export type ContactForm = {
  email: string;
  subject: string;
  body: string;
};

export type NavLink = {
  name: string;
  title: string;
  route?: { name: string };
  type: "scroll" | "route";
  active: boolean;
};
