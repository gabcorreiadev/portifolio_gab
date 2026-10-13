export type ItemTrajetoria = {
  tipo: "experiencia" | "formacao";
  periodo: string;
  /** Ano usado para ordenar a timeline (mais recente primeiro). */
  ordem: number;
  titulo: string;
  local: string;
  descricao?: string;
};

export const trajetoria: ItemTrajetoria[] = [
  {
    tipo: "experiencia",
    periodo: "Fev/2026 – atual",
    ordem: 2026.02,
    titulo: "Desenvolvedor Front-End Jr",
    local: "Be.Aliant",
    descricao:
      "Criação, evolução e sustentação de plataformas de compliance e canais de denúncia; formulários acessíveis (WCAG); deploy e gestão em AWS; suporte técnico direto a clientes B2B.",
  },
  {
    tipo: "formacao",
    periodo: "2024 – Dez/2026",
    ordem: 2025.9,
    titulo: "Tecnólogo em Sistemas para Internet",
    local: "Estácio de Sá",
  },
  {
    tipo: "formacao",
    periodo: "2025",
    ordem: 2025.5,
    titulo: "AWS Academy Graduate – Cloud Foundations",
    local: "SENAI “Prof. Vicente Amato”",
  },
  {
    tipo: "formacao",
    periodo: "2025",
    ordem: 2025.4,
    titulo: "Design UX/UI",
    local: "SENAI “Prof. Vicente Amato”",
  },
  {
    tipo: "experiencia",
    periodo: "Ago/2024 – Set/2025",
    // TODO: confirmar o título oficial do cargo na Revizia
    ordem: 2024.08,
    titulo: "Estagiário de Desenvolvimento Front-End",
    local: "Revizia",
    descricao:
      "Plataforma SaaS tributária; Clean Code; validações de regras de negócio críticas; otimização do consumo de APIs REST em relatórios fiscais pesados.",
  },
  {
    tipo: "experiencia",
    periodo: "Set/2023 – Abr/2024",
    ordem: 2023.09,
    titulo: "Front-End / UX Designer",
    local: "Paynet",
    descricao:
      "Protótipos de alta fidelidade no Figma com foco em acessibilidade; implementação em HTML, CSS e JavaScript integrados a APIs REST; alinhamento entre design e execução em squads ágeis.",
  },
  {
    tipo: "formacao",
    periodo: "2023",
    ordem: 2023.5,
    titulo: "Web Design Front-End",
    local: "SENAI “José Ephim Mindlin”",
  },
  {
    tipo: "formacao",
    periodo: "2023",
    ordem: 2023.4,
    // TODO: confirmar instituição da formação Azure
    titulo: "Fundamentos de nuvem",
    local: "Microsoft Azure",
  },
];

export const empresas = ["Be.Aliant", "Revizia", "Paynet"] as const;
