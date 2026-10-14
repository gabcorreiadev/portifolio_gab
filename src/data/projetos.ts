export type Projeto = {
  slug: string;
  nome: string;
  descricao: string;
  /** Pontos fortes tirados do README de cada repositório. */
  destaques?: string[];
  /** Ids de src/data/stacks.ts */
  stacks: string[];
  url: string;
  repo?: string;
  banner: string;
  destaque?: boolean;
};

// Stacks e destaques conferidos nos READMEs de github.com/gabcorreiadev (out/2026).
export const projetos: Projeto[] = [
  {
    slug: "box-na-veia",
    nome: "Box na Veia",
    descricao:
      "Guia diário de Fórmula 1 em português: próxima corrida com contagem regressiva e onde assistir no Brasil, classificação do campeonato, lendas da categoria e glossário.",
    destaques: [
      "Dados ao vivo da API Jolpica-F1 (calendário, resultados e classificação)",
      "Som de largada gerado no navegador com Web Audio API",
      "Calendário .ics com lembrete 1 h antes de cada corrida",
      "SEO com renderização no servidor, imagens de compartilhamento e schema.org",
    ],
    stacks: ["nextjs", "typescript", "netlify"],
    url: "https://boxnaveia.netlify.app/",
    repo: "https://github.com/gabcorreiadev/boxdiario",
    banner: "/img/projetos/box-na-veia.webp",
    destaque: true,
  },
  {
    slug: "tracker-estreias",
    nome: "Tracker de Estreias",
    descricao:
      "Catálogo das estreias de cinema no Brasil, com filtros, elenco, trailers, listas pessoais e agenda de sessões. Front-end em React e um BFF próprio em Node.js.",
    destaques: [
      "BFF com Fastify, validação com Zod e cache em memória",
      "TanStack Query no front e testes com Vitest e MSW",
      "Agenda exporta .ics; listas salvas no navegador, sem banco",
      "Dados do TMDB, com modo mock que roda sem token",
    ],
    stacks: ["react", "typescript", "vite", "tailwind", "tanstack", "node", "fastify", "zod", "vitest"],
    url: "https://trackerestreias.netlify.app/",
    repo: "https://github.com/gabcorreiadev/tracker",
    banner: "/img/projetos/tracker-estreias.webp",
    destaque: true,
  },
  {
    slug: "anil-jeans",
    nome: "Anil Jeans",
    descricao:
      "Loja de jeans levada do protótipo no Figma para o código, sem framework: vitrine com filtros e busca, página de produto, favoritos, conta de usuário e checkout em 3 etapas.",
    destaques: [
      "Carrinho em gaveta com visual de cupom fiscal e cupons de desconto",
      "Contas de usuário com PocketBase",
      "Frete simulado por CEP e frete grátis acima de um valor",
      "Animações que respeitam o movimento reduzido",
    ],
    stacks: ["figma", "vite", "typescript", "sass", "pocketbase"],
    url: "https://aniljeans.netlify.app/",
    repo: "https://github.com/gabcorreiadev/aniljeans",
    banner: "/img/projetos/anil-jeans.webp",
  },
  {
    slug: "new-burger",
    nome: "New Burger",
    descricao:
      "Landing page de hamburgueria desenhada primeiro no Figma e depois implementada em código, com cardápio, promoções e painel de pedidos.",
    destaques: [
      "Painel lateral de pedido: adicionar, ajustar quantidades e enviar por e-mail",
      "Cardápio renderizado a partir de um arquivo de dados",
      "Header fixo com menu mobile e seção atual destacada",
    ],
    stacks: ["figma", "vite", "typescript", "sass"],
    url: "https://timenewburger.netlify.app/",
    repo: "https://github.com/gabcorreiadev/newburger",
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
