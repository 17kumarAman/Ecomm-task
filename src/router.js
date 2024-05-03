import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Shop from "./views/Shop.vue";
import Cart from "./views/Cart.vue";
import Item from "./views/Item.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Signup",
    component: Signup,
    path: "/signup",
  },

  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Cart",
    component: Cart,
    path: "/cart",
  },
  {
    name: "Shop",
    component: Shop,
    path: "/shop",
  },
  {
    name : "Item",
    component: Item,
    path:"/item/:name"
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// :to="{name:'SignUP'}
