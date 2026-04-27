import type { RouteRecordRaw } from "vue-router"
import type { RouteMetaData } from "@/types"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Compliance from "@/views/Compliance.vue"
import Environmental from "@/views/Environmental.vue"
import Accessibility from "@/views/Accessibility.vue"
import Consultancy from "@/views/Consultancy.vue"

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
    path: "/ambiental",
    name: "Environmental",
    component: Environmental,
  },
  {
    path: "/compliance",
    name: "Compliance",
    component: Compliance,
  },
  {
    path: "/acessibilidade",
    name: "Accessibility",
    component: Accessibility,
  },
  {
    path: "/consultoria",
    name: "Consultancy",
    component: Consultancy,
  },
  {
    path: "/quem-somos",
    name: "About",
    component: About,
  },
  // Redirecionamento para evitar erros de links antigos ou cache
  {
    path: "/sobre",
    redirect: "/quem-somos"
  }
]
