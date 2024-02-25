import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/empInsert",
    name: "empInsert",

    component: () => import("../views/epm/empInsert.vue"),
  },

  {
    path: "/empUpdate",
    name: "empUpdate",

    component: () => import("../views/epm/empUpdate.vue"),
  },

  {
    path: "/",
    name: "emp",

    component: () => import("../views/element/ElemnentView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
