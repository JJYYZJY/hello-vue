import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page" */ "../views/About")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/page1"
      },
      {
        path: "/page1",
        name: "page1",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/Page1")
      },
      {
        path: "/page2",
        name: "page2",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/Page2")
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
