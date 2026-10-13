export type Projeto = {
  slug: string;
  nome: string;
  descricao: string;
  /** Ids de src/data/stacks.ts */
  stacks: string[];
  url: string;
  repo?: string;
  banner: string;
  destaque?: boolean;
};

// Stacks dos projetos marcados com TODO ainda precisam ser confirmadas no repositório.
export const projetos: Projeto[] = [
  {
    slug: "box-na-veia",
    nome: "Box na Veia",
    descricao:
      "Portal de Fórmula 1 com a próxima corrida, onde assistir, história da categoria e os grandes pilotos. Layout animado, com destaque para os brasileiros e experiência mobile caprichada.",
    stacks: ["html", "css", "javascript"], // TODO: confirmar
    url: "https://boxnaveia.netlify.app/",
    banner: "/img/projetos/box-na-veia.webp",
    destaque: true,
  },
  {
    slug: "tracker-estreias",
    nome: "Tracker de Estreias",
    descricao:
      "Catálogo de estreias de cinema, com filmes e elenco. Explora o consumo assíncrono de API, infinite scroll, skeletons e filtros dinâmicos.",
    stacks: ["html", "css", "javascript"], // TODO: confirmar
    url: "https://trackerestreias.netlify.app/",
    banner: "/img/projetos/tracker-estreias.webp",
    destaque: true,
  },
  {
    slug: "anil-jeans",
    nome: "Anil Jeans",
    descricao:
      "Loja de moda jeans levada do protótipo no Figma para o código. Inclui carrinho de compras e animações que fogem do padrão de e-commerce.",
    stacks: ["figma", "html", "css", "javascript"], // TODO: confirmar
    url: "https://aniljeans.netlify.app/",
    banner: "/img/projetos/anil-jeans.webp",
  },
  {
    slug: "new-burger",
    nome: "New Burger",
    descricao:
      "Site de hamburgueria desenhado primeiro no Figma e depois implementado em código. Mostra o fluxo completo de design para front-end.",
    stacks: ["figma", "html", "sass", "typescript"],
    url: "https://timenewburger.netlify.app/",
    banner: "/img/projetos/new-burger.webp",
  },
  {
    slug: "starbucks",
    nome: "Starbucks",
    descricao:
      "Releitura de página institucional de cafeteria, feita com HTML, CSS e JavaScript puros.",
    stacks: ["html", "css", "javascript"],
    url: "https://starstbucks.netlify.app/",
    banner: "/img/projetos/starbucks.webp",
  },
  {
    slug: "hotel-paraiso",
    nome: "Hotel Paraíso",
    descricao:
      "Site institucional de hotel com HTML, CSS e JavaScript, com foco em layout responsivo e apresentação visual.",
    stacks: ["html", "css", "javascript"],
    url: "https://hotelparaisoo.netlify.app/",
    banner: "/img/projetos/hotel-paraiso.webp",
  },
];
