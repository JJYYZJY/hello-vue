import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "../views/Page1.vue";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404.vue";
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
    component: () => import(/* webpackChunkName: "page" */ "../views/Page2")
  },
  {
    path: "/page",
    redirect: "/page1"
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/page3"
      },
      {
        path: "/page3",
        name: "page3",
        component: () => import("../views/Page1")
      },
      {
        path: "/page4",
        name: "page4",
        component: () => import("../views/Page2")
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
