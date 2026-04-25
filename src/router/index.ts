import type { RouteRecordRaw } from "vue-router"
import type { RouteMetaData } from "@/types"
import Home from "@/views/Home.vue"
import Services from "@/views/Services.vue"
import About from "@/views/About.vue"
import Accessibility from "@/views/Accessibility.vue"
import Contact from "@/views/Contact.vue"

declare module "vue-router" {
  interface RouteMeta extends RouteMetaData {}
}

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/servicos",
    name: "Services",
    component: Services,
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
  },
  {
    path: "/acessibilidade",
    name: "Accessibility",
    component: Accessibility,
  },
  {
    path: "/contatos",
    name: "Contact",
    component: Contact,
  },
]
