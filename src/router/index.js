import { createRouter, createWebHistory } from "@ionic/vue-router";
import CategoriesPage from "../pages/CategoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/categories",
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesPage,
  },
  {
    path: "/categories/doctor",
    name: "doctors",
    component: () => import('../pages/doctor/DoctorCategories.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
