import Vue from "vue";
import VueRouter from "vue-router";
import Body from "../layots/Body";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Body",
    component: Body,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: () => import("../components/TodoList.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../layots/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../layots/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
