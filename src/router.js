import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import ListadoSoftware from "@/pages/ListadoSoftware.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/listado_software",
    name: "ListadoSoftware",
    component: ListadoSoftware,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
