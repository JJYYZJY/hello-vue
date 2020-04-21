import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404.vue";
import AuthorityNotFound from "../views/403.vue";
import findLast from "lodash/findLast";
import { check, isLogin } from "../utils/auth";
import { notification } from "ant-design-vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    meta: { icon: "question-circle", title: "关于" },
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "page" */ "../views/About")
  },
  {
    path: "/",
    meta: { icon: "copy", title: "页面" },
    name: "page",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        meta: { icon: "home", title: "主页" },
        name: "home",
        component: Home
      },
      {
        path: "/page1",
        meta: { title: "页面1", authority: ["admin"] },
        name: "page1",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/Page1")
      },
      {
        path: "/page2",
        meta: { title: "页面2", authority: ["user"] },
        name: "page2",
        component: () =>
          import(/* webpackChunkName: "layout" */ "../views/Page2")
      }
    ]
  },
  {
    path: "/403",
    name: "403",
    hideInMenu: true,
    component: AuthorityNotFound
  },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    nProgress.start();
  }
  //获取要去的路径和父路径中配置的权限信息
  let record = findLast(to.matched, item => item.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/home") {
      next({
        path: "/home",
        replace: true
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "暂无权限 请联系管理员."
      });
      next({
        path: "/403",
        replace: true
      });
    }
    nProgress.done();
  } else {
    next();
  }
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
