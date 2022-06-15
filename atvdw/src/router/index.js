import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AlunosView from "../views/AlunosView.vue";
import TurmasView from "../views/TurmasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/alunos",
      name: "alunos",
      component: AlunosView,
    },
    {
      path: "/turmas",
      name: "turmas",
      component: TurmasView,
    },
  ],
});

export default router;
