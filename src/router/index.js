import Vue from "vue";
import VueRouter  from "vue-router";

import User from "../views/user/user.vue";
import Login from "../components/login/login.vue";

import Menu from "../views/menu/menu.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/user",
    component:User
  },
  {
    path: "/",
    component:Login
  },
  {
    path: "/menu",
    component:Menu
  },
]

const router = new VueRouter({
  routes
})


export default router
