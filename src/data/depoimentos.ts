export type Depoimento = {
  slug: string;
  nome: string;
  cargo: string;
  empresa: "Be.Aliant" | "Revizia" | "Paynet";
  selo?: string;
  linkedin: string;
  /** null enquanto a foto não chegar — o card mostra as iniciais. */
  foto: string | null;
  /** O card só aparece no site quando este campo estiver preenchido. */
  texto: string;
};

export const depoimentos: Depoimento[] = [
  {
    slug: "leonardo-leal",
    nome: "Leonardo Leal Araújo",
    cargo: "Desenvolvedor",
    empresa: "Be.Aliant",
    linkedin: "https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo/",
    foto: "/img/depoimentos/leonardo-leal.webp",
    texto: "",
  },
  {
    slug: "thais-fonseca",
    nome: "Thaís Fonseca",
    cargo: "Analista Pleno Tecnologia, Suporte",
    empresa: "Be.Aliant",
    linkedin: "https://www.linkedin.com/in/thaisfdasilva/",
    foto: "/img/depoimentos/thais-fonseca.webp",
    texto: "",
  },
  {
    slug: "gabriel-neves",
    nome: "Gabriel Neves",
    cargo: "Consultor de Customer Success",
    empresa: "Be.Aliant",
    linkedin: "https://www.linkedin.com/in/gabrielwneves/",
    foto: "/img/depoimentos/gabriel-neves.webp",
    texto:
      "Tenho o privilégio de dividir a jornada profissional com o Gabriel, alguém que une competência, integridade e maturidade. Ele não só entrega resultados: inspira confiança e eleva o padrão de excelência por onde passa. Tenho certeza de que ainda vai muito longe.",
  },
  {
    slug: "ricardo-santos",
    nome: "Ricardo A. Santos",
    cargo: "Desenvolvedor",
    empresa: "Revizia",
    linkedin: "https://www.linkedin.com/in/ricardo-asantos/",
    foto: "/img/depoimentos/ricardo-santos.webp",
    texto: "",
  },
  {
    slug: "vagner-cavalheri",
    nome: "Vagner Martins Cavalheri",
    cargo: "Desenvolvedor",
    empresa: "Revizia",
    selo: "Mentor",
    linkedin: "https://www.linkedin.com/in/vagner-martins-cavalheri-02a49a97/",
    foto: "/img/depoimentos/vagner-cavalheri.webp",
    texto: "",
  },
  {
    slug: "isabela-delgado",
    nome: "Isabela Delgado",
    cargo: "Líder de Sucesso do Cliente, Suporte e Onboarding",
    empresa: "Revizia",
    linkedin: "https://www.linkedin.com/in/isabela-delgado-764289239/",
    foto: "/img/depoimentos/isabela-delgado.webp",
    texto: "",
  },
  {
    slug: "guilherme-ferreira",
    nome: "Guilherme Ferreira",
    cargo: "Desenvolvedor",
    empresa: "Paynet",
    linkedin: "https://www.linkedin.com/in/guilherme-f-s/",
    foto: "/img/depoimentos/guilherme-ferreira.webp",
    texto: "",
  },
  {
    slug: "guilherme-zalla",
    nome: "Guilherme Zalla",
    cargo: "Desenvolvedor",
    empresa: "Paynet",
    linkedin: "https://www.linkedin.com/in/guilhermezalla/",
    foto: "/img/depoimentos/guilherme-zalla.webp",
    texto:
      "Trabalhei com o Gabriel no tempo da Paynet e foi um prazer tê-lo como colega de equipe. Sempre demonstrou comprometimento, proatividade e atenção às demandas da empresa, destacando-se pela eficiência, dedicação e disposição para colaborar com a equipe. É um excelente profissional, com quem tive uma ótima experiência de trabalho e que recomendo com confiança.",
  },
];

export const depoimentosPublicados = depoimentos.filter((d) => d.texto.trim().length > 0);
