import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import type { RouteMetaData } from "@/types"
import Home from "@/views/Home.vue"
import Services from "@/views/Services.vue"
import About from "@/views/About.vue"
import Accessibility from "@/views/Accessibility.vue"
import Contact from "@/views/Contact.vue"

declare module "vue-router" {
  interface RouteMeta extends RouteMetaData {}
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "EcoBrasil - Consultoria Ambiental",
    },
  },
  {
    path: "/servicos",
    name: "Services",
    component: Services,
    meta: {
      title: "Serviços - EcoBrasil",
    },
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
    meta: {
      title: "Sobre - EcoBrasil",
    },
  },
  {
    path: "/acessibilidade",
    name: "Accessibility",
    component: Accessibility,
    meta: {
      title: "Laudo de Acessibilidade - EcoBrasil",
    },
  },
  {
    path: "/contatos",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contatos - EcoBrasil",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "EcoBrasil"
  next()
})

export default router
