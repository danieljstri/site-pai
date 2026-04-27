import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "compliance",
    title: "Compliance",
    description: "Conformidade legal da sua edificação e do seu negócio.",
    icon: "ShieldCheck",
    details: [
      "Auditoria de conformidade",
      "Gestão de riscos legais",
      "Adequação normativa",
      "Monitoramento de requisitos",
      "Certificações de conformidade",
    ],
  },
  {
    id: "ambiental",
    title: "Ambiental",
    description: "Autuações, Notificações e Licenças.",
    icon: "Leaf",
    details: [
      "Licenciamento Ambiental completo",
      "Defesa de autuações",
      "Atendimento a notificações",
      "Estudos de impacto ambiental",
      "Gestão de resíduos",
    ],
  },
  {
    id: "bombeiros",
    title: "Corpo de Bombeiros",
    description: "Projeto, Aprovação e Regularização.",
    icon: "Flame",
    details: [
      "Projeto de Prevenção (PPCI)",
      "Aprovação técnica",
      "Vistoria para CLCB/AVCB",
      "Regularização de edificações",
      "Instalações de segurança",
    ],
  },
  {
    id: "acessibilidade",
    title: "Acessibilidade",
    description: "Laudo e projeto técnico.",
    icon: "Accessibility",
    details: [
      "Laudo técnico de acessibilidade",
      "Projetos de adequação NBR 9050",
      "Vistoria técnica especializada",
      "Certificação de acessibilidade",
      "Consultoria para adaptações",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria",
    description: "Serviços especializados em engenharia.",
    icon: "Wrench",
    details: [
      "Assessoria técnica em engenharia",
      "Laudos periciais",
      "Gestão de manutenção",
      "Projetos complementares",
      "Acompanhamento de obras",
    ],
  },
]

