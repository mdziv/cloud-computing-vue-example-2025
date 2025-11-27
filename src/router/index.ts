import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Details from "@/views/Details.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          component: Home
      },
      {
          path: "/about",
          component: About
      },
      {
          path: "/details/:id",
          component: Details
      }
  ]
})

export default router
