import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
    },
    {
      path: "*",
      redirect: {
        name: "404",
      },
    },
  ],
});

export default router;
