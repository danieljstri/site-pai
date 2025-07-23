export interface Service {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
}

export interface Client {
  id: number
  name: string
  logo: string
}

export interface MenuItem {
  name: string
  path: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface RouteMetaData {
  title: string
}

export type IconName = "FileText" | "Eye" | "Settings" | "Shield" | "Accessibility"
