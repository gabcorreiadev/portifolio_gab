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
    texto: "",
  },
  {
    slug: "ricardo-santos",
    nome: "Ricardo A. Santos",
    cargo: "Desenvolvedor",
    empresa: "Revizia",
    linkedin: "https://www.linkedin.com/in/ricardo-asantos/",
    foto: null, // TODO: foto pendente
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
    texto: "",
  },
];

export const depoimentosPublicados = depoimentos.filter((d) => d.texto.trim().length > 0);
