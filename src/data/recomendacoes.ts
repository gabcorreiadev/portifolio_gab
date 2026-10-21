/**
 * Página "Comece aqui": recomendações para quem quer começar na programação.
 * Números de alunos e notas da Udemy foram conferidos em out/2026 e mudam com o tempo.
 * Para trocar um curso, edite só este arquivo.
 */

export type Recurso = {
  nome: string;
  quem: string;
  onde: string;
  url: string;
  gratis: boolean;
  porque: string;
  info?: string;
};

export type Trilha = {
  id: string;
  titulo: string;
  resumo: string;
  passos: string[];
  recursos: Recurso[];
};

/** Texto de abertura na voz do Gabriel (edite à vontade). */
export const abertura = [
  "Se você tem curiosidade por tecnologia, comece. Não precisa saber tudo antes, nem escolher o caminho perfeito no primeiro dia.",
  "Eu comecei em 2023 no SENAI e recomendo de olhos fechados: hoje tem muitos cursos gratuitos, e o melhor é que a qualidade é a mesma dos cursos pagos. A Udemy também me ajudou muito, com cursos completos e acessíveis.",
  "Aqui embaixo separei o que eu indicaria, seja para só conhecer programação, ir para o front-end ou para o back-end.",
];

export const senai = {
  titulo: "SENAI: por onde eu comecei",
  texto:
    "Foi no SENAI que fiz Web Design Front-End, Design UX/UI e a formação AWS Cloud Foundations. Tem cursos gratuitos e pagos, presenciais e a distância, e em todos eles a qualidade se mantém. Vale ficar de olho nas vagas gratuitas da sua cidade e do seu estado.",
  links: [
    { label: "SENAI (nacional)", url: "https://www.senaibrasil.com.br" },
    { label: "Cursos a distância no Mundo SENAI", url: "https://loja.mundosenai.com.br/senainacional" },
  ],
};

export const trilhas: Trilha[] = [
  {
    id: "conhecer",
    titulo: "Quero só conhecer",
    resumo: "Para quem tem curiosidade e quer entender o que é programar antes de escolher uma área.",
    passos: [
      "Comece por lógica de programação: é a base de qualquer linguagem.",
      "Escolha uma linguagem simples para praticar, como Python ou JavaScript.",
      "Faça pequenos exercícios todos os dias, mesmo que por 30 minutos.",
    ],
    recursos: [
      {
        nome: "Curso em Vídeo: Algoritmos e Python",
        quem: "Prof. Gustavo Guanabara",
        onde: "YouTube / cursoemvideo.com",
        url: "https://www.cursoemvideo.com",
        gratis: true,
        porque: "O conteúdo para iniciantes mais citado nos fóruns brasileiros. Didática leve e do zero.",
      },
      {
        nome: "Lógica de Programação",
        quem: "SENAI",
        onde: "EAD do SENAI (varia por estado)",
        url: "https://www.senaibrasil.com.br",
        gratis: true,
        porque: "Curso curto de iniciação, a distância, para dar o primeiro passo com o selo do SENAI.",
      },
      {
        nome: "Curso de Python 3 do básico ao avançado",
        quem: "Luiz Otávio Miranda",
        onde: "Udemy",
        url: "https://www.udemy.com/courses/search/?q=Curso%20de%20Python%203%20do%20b%C3%A1sico%20ao%20avan%C3%A7ado",
        gratis: false,
        porque: "Começa pela lógica e vai até projetos reais. Um dos cursos em português mais bem avaliados.",
        info: "Nota 4,8 · 185 mil+ alunos",
      },
    ],
  },
  {
    id: "front",
    titulo: "Quero ser front-end",
    resumo: "Para quem gosta de ver o resultado na tela: sites, interfaces, design e experiência do usuário.",
    passos: [
      "HTML e CSS primeiro: estrutura e estilo das páginas.",
      "Depois JavaScript, que dá vida à interface.",
      "Só então um framework, como React ou Angular. E publique tudo no GitHub.",
    ],
    recursos: [
      {
        nome: "Curso em Vídeo: HTML5 + CSS3 e JavaScript",
        quem: "Prof. Gustavo Guanabara",
        onde: "YouTube / cursoemvideo.com",
        url: "https://www.cursoemvideo.com",
        gratis: true,
        porque: "Módulos de HTML, CSS e JavaScript do absoluto zero, com exercícios.",
      },
      {
        nome: "freeCodeCamp",
        quem: "freeCodeCamp.org",
        onde: "freecodecamp.org",
        url: "https://www.freecodecamp.org/portuguese/",
        gratis: true,
        porque: "Trilha prática e gratuita de web, com projetos e certificados.",
      },
      {
        nome: "Curso Web Moderno Completo com JavaScript + Projetos",
        quem: "Leonardo Moura Leitão",
        onde: "Udemy",
        url: "https://www.udemy.com/course/curso-web/",
        gratis: false,
        porque: "Do HTML e CSS ao JavaScript, React, Angular e Node. Um panorama completo da web.",
        info: "Nota 4,7 · 150 mil+ alunos · 97 h",
      },
      {
        nome: "Curso de React do Zero a Maestria",
        quem: "Matheus Battisti (Hora de Codar)",
        onde: "Udemy",
        url: "https://horadecodar.com.br/curso-de-react-do-zero-a-maestria-c-hooks-router-api-projetos/",
        gratis: false,
        porque: "Para o passo seguinte: React com hooks, rotas, APIs e projetos, em cerca de 30 h.",
      },
    ],
  },
  {
    id: "back",
    titulo: "Quero ser back-end",
    resumo: "Para quem curte lógica, dados e o que acontece por trás da tela: APIs, servidores e bancos de dados.",
    passos: [
      "Escolha uma linguagem e vá a fundo nela, como Java, Python ou JavaScript com Node.js.",
      "Aprenda banco de dados e SQL desde cedo: é a base do back-end.",
      "Construa uma API pequena e publique no GitHub.",
    ],
    recursos: [
      {
        nome: "roadmap.sh: Backend",
        quem: "Comunidade roadmap.sh",
        onde: "roadmap.sh",
        url: "https://roadmap.sh/backend",
        gratis: true,
        porque: "Um mapa do que estudar e em que ordem. Indicado na comunidade para não se perder.",
      },
      {
        nome: "Curso em Vídeo: PHP e MySQL",
        quem: "Prof. Gustavo Guanabara",
        onde: "YouTube / cursoemvideo.com",
        url: "https://www.cursoemvideo.com",
        gratis: true,
        porque: "Primeiro contato com servidor e banco de dados, de graça e em português.",
      },
      {
        nome: "Java COMPLETO Programação Orientada a Objetos + Projetos",
        quem: "Prof. Dr. Nelio Alves",
        onde: "Udemy",
        url: "https://www.udemy.com/course/java-curso-completo/",
        gratis: false,
        porque: "Referência para aprender Java e orientação a objetos com profundidade.",
        info: "50 h+ de vídeo",
      },
      {
        nome: "Curso de Python 3 do básico ao avançado",
        quem: "Luiz Otávio Miranda",
        onde: "Udemy",
        url: "https://www.udemy.com/courses/search/?q=Curso%20de%20Python%203%20do%20b%C3%A1sico%20ao%20avan%C3%A7ado",
        gratis: false,
        porque: "Inclui Django, APIs, bancos de dados (SQLite, MySQL) e testes automatizados.",
        info: "Nota 4,8 · 185 mil+ alunos",
      },
    ],
  },
];

/** O que a comunidade repete nos fóruns (TabNews e afins). */
export const conselhos = [
  { titulo: "Comece pela lógica", texto: "A base vale para qualquer linguagem. Pular essa etapa costuma custar caro depois." },
  { titulo: "Um curso de cada vez", texto: "Comprar vários cursos ao mesmo tempo é o jeito mais rápido de não terminar nenhum." },
  { titulo: "Desconfie de promessas", texto: "“Full stack em uma semana” não existe. Na Udemy, prefira os cursos mais bem avaliados." },
  { titulo: "Projetos valem mais", texto: "Portfólio no GitHub pesa mais que certificado. Construa coisas desde cedo." },
  { titulo: "Entre numa comunidade", texto: "Fóruns, Discord e eventos ajudam a tirar dúvidas e a manter o ritmo." },
  { titulo: "Promoção na Udemy é rotina", texto: "Os cursos entram em desconto com frequência. Não pague o preço cheio." },
];

export const fontes = [
  { label: "TabNews: qual curso para começar a programar", url: "https://www.tabnews.com.br/batto/qual-curso-para-comecar-a-progrmar" },
  { label: "TabNews: por onde começar na programação", url: "https://www.tabnews.com.br/Diegol/por-onde-comecar-na-programacao-em-2023" },
  { label: "TabNews: cursos com foco em back-end", url: "https://www.tabnews.com.br/luisdevvi/recomendacoes-de-cursos-com-foco-em-back-end" },
  { label: "Guia dos Cursos: Curso em Vídeo em 2026", url: "https://guiadoscursos.com/curso-em-video-2026-gustavo-guanabara-programacao-html-css-python-php-gratuito/" },
];
