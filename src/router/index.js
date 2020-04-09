import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "../views/Page1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/page1",
    name: "page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "page2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page" */ "../views/Page2.vue")
  },
  {
    path: "/",
    redirect: "/page1"
  },
  {
    path: "*",
    name: "404",
    component: Page1
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
