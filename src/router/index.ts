import { createMemoryHistory, createRouter, type RouteMeta } from "vue-router";

export const routes = [
  {
    path: "",
    redirect: { name: "landing-page" },
    component: () => import("@/components/layouts/PublicLayout.vue"),
    children: [
      {
        path: "",
        name: "landing-page",
        component: () => import("@/modules/landing/LandingView.vue"),
      },
      {
        path: "contact",
        name: "contact-view",
        component: () => import("@/modules/contact/ContactView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
