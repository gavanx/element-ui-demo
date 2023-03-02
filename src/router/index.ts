import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SelectDemo from "../views/demo/SelectDemo.vue";
import SelectDemo2 from "../views/demo/SelectDemo2.vue";
import SelectLimitDemo from "../views/demo/SelectLimitDemo.vue";
import VForDemo from "../views/demo/VForDemo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/select",
      name: "select",
      component: SelectDemo,
    },
    {
      path: "/select2",
      name: "select2",
      component: SelectDemo2,
    },
    {
      path: "/select3",
      name: "select3",
      component: SelectLimitDemo,
    },
    {
      path: "/vfor",
      name: "vfor",
      component: VForDemo,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
