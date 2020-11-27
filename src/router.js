import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import ListadoSoftware from "@/pages/ListadoSoftware.vue";
import BuscarCreditosGrupales from "@/pages/BuscarCreditosGrupales.vue";
import Inspeccionar from "@/pages/Inspeccionar.vue";
import NotFound from "@/pages/404.vue";
import Login from "@/pages/Login.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: [{ name: "Home" }],
    },
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
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Listados de softwares" },
      ],
    },
  },
  {
    path: "/buscar_creditos_grupales",
    name: "BuscarCreditosGrupales",
    component: BuscarCreditosGrupales,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Buscar créditos grupales" },
      ],
    },
  },
  {
    path: "/buscar_creditos_grupales/inspeccionar",
    name: "Inspeccionar",
    component: Inspeccionar,
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Buscar créditos grupales", link: "/buscar_creditos_grupales" },
        { name: "Inspeccionar" },
      ],
    },
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
