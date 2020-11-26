import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import ListadoSoftware from "@/pages/ListadoSoftware.vue";
import BuscarCreditosGrupales from "@/pages/BuscarCreditosGrupales.vue";
import NotFound from "@/pages/404.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/listado_software",
    name: "ListadoSoftware",
    component: ListadoSoftware,
  },
  {
    path: "/buscar_creditos_grupales",
    name: "BuscarCreditosGrupales",
    component: BuscarCreditosGrupales,
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

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("mobilenderToken");
  console.log(
    "🚀 ~ file: router.js ~ line 36 ~ router.beforeEach ~ token",
    token
  );

  if (to.name !== "Login" && !token) next({ name: "Login" });
  else next();
});

export default router;
