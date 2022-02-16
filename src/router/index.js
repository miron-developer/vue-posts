import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts",
      name: "posts",
      // route level code-splitting
      // this generates a separate chunk (Posts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/posts/:id",
      name: "post",
      // route level code-splitting
      // this generates a separate chunk (Post.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PostView.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "404",
      // route level code-splitting
      // this generates a separate chunk (404.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
