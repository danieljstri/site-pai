import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Services from "@/views/Services.vue"
import About from "@/views/About.vue"
import Accessibility from "@/views/Accessibility.vue"
import Contact from "@/views/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "EcoConsult - Consultoria Ambiental",
    },
  },
  {
    path: "/servicos",
    name: "Services",
    component: Services,
    meta: {
      title: "Serviços - EcoConsult",
    },
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
    meta: {
      title: "Sobre - EcoConsult",
    },
  },
  {
    path: "/acessibilidade",
    name: "Accessibility",
    component: Accessibility,
    meta: {
      title: "Laudo de Acessibilidade - EcoConsult",
    },
  },
  {
    path: "/contatos",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contatos - EcoConsult",
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
  document.title = to.meta.title || "EcoConsult"
  next()
})

export default router
