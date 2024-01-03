import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Index.vue";
import Page from "../view/Page.vue";
import Code from "../view/Code.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/:id", name: "Page", component: Page },
  { path: "/code", name:"Code", component:Code }  
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
