import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "licenciamento",
    title: "Licenciamento Ambiental",
    description: "Obtenção e renovação de licenças ambientais para sua empresa.",
    icon: "FileText",
    details: [
      "Licença Prévia (LP)",
      "Licença de Instalação (LI)",
      "Licença de Operação (LO)",
      "Renovação de licenças",
      "Acompanhamento processual",
    ],
  },
  {
    id: "vistoria",
    title: "Vistoria Ambiental",
    description: "Inspeções técnicas para verificar conformidade ambiental.",
    icon: "Eye",
    details: [
      "Vistoria de instalações",
      "Avaliação de impactos",
      "Relatórios técnicos",
      "Identificação de não-conformidades",
      "Planos de adequação",
    ],
  },
  {
    id: "controle",
    title: "Controle de Licenças",
    description: "Monitoramento e controle de validade das suas licenças.",
    icon: "Settings",
    details: [
      "Controle de prazos",
      "Alertas de vencimento",
      "Renovações automáticas",
      "Gestão documental",
      "Relatórios periódicos",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria de Manutenção",
    description: "Suporte contínuo para manter sua empresa em conformidade.",
    icon: "Shield",
    details: [
      "Consultoria preventiva",
      "Treinamento de equipes",
      "Auditorias internas",
      "Planos de emergência",
      "Suporte técnico 24h",
    ],
  },
  {
    id: "extintores",
    title: "Controle de Extintores",
    description: "Manutenção e controle de equipamentos de combate a incêndio.",
    icon: "Shield",
    details: [
      "Inspeção mensal",
      "Manutenção preventiva",
      "Recarga de extintores",
      "Certificação INMETRO",
      "Relatórios de conformidade",
    ],
  },
  {
    id: "acessibilidade",
    title: "Laudo de Acessibilidade",
    description: "Avaliação e certificação de acessibilidade em estabelecimentos.",
    icon: "Accessibility",
    details: [
      "Vistoria técnica completa",
      "Análise de conformidade NBR 9050",
      "Relatório detalhado",
      "Certificado de acessibilidade",
      "Orientações para adequação",
    ],
  },
]
