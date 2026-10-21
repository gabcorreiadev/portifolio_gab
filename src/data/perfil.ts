export const perfil = {
  nome: "Gabriel Correia Reis",
  primeiroNome: "Gabriel",
  cargo: "Desenvolvedor Front-End & Design UX/UI",
  fraseApoio:
    "Crio interfaces rápidas, acessíveis e fiéis ao design, do protótipo no Figma ao deploy na nuvem.",
  focos: ["Front-End", "UX/UI", "Acessibilidade"],
  nascimento: "2004-12-05",
  naAreaDesde: "2023-09-01",
  site: "https://gabcorreia.com.br",
  email: "contato@gabcorreia.com.br",
  /** WhatsApp Business (o número pessoal não aparece no site). */
  whatsapp: {
    numero: "5511978461426",
    exibicao: "(11) 97846-1426",
    mensagem: "Olá, Gabriel! Vi seu portfólio e gostaria de conversar.",
  },
  linkedin: "https://www.linkedin.com/in/gabriel-correia-reis",
  github: "https://github.com/gabcorreiadev",
  instagram: "https://www.instagram.com/gabcorreiareis",
  /** Caminho do currículo em PDF dentro de /public. Deixe null enquanto o PDF não existir. */
  curriculo: "/cv/curriculo-gabriel-correia-reis.pdf" as string | null,
  foto: "/img/hero/gabriel.webp",
};

export const whatsappUrl = () =>
  `https://wa.me/${perfil.whatsapp.numero}?text=${encodeURIComponent(perfil.whatsapp.mensagem)}`;

export const navegacao = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/trajetoria/", label: "Trajetória" },
  { href: "/projetos/", label: "Projetos" },
  { href: "/comece/", label: "Comece aqui" },
  { href: "/contato/", label: "Contato" },
];

export const softSkills = [
  "Aprendizado contínuo",
  "Trabalho em equipe",
  "Comunicação assertiva",
  "Resolução de problemas",
  "Adaptabilidade",
];

export const conceitos = ["Clean Code", "APIs REST", "Componentização", "Metodologias Ágeis (Kanban)"];

export const resumo = [
  "Sou Desenvolvedor Front-End e comecei na tecnologia em 2023, aos 18 anos, no curso de Web Design Front-End do SENAI. Ali descobri minha vocação: construir interfaces que unem bom design e código bem feito.",
  "Passei pelo UX Design na Paynet e pela engenharia de uma plataforma SaaS tributária na Revizia. Hoje, na Be.Aliant, desenvolvo e sustento plataformas de compliance e canais de denúncia corporativos. No dia a dia trabalho com JavaScript, TypeScript, React e Angular, aplico diretrizes de acessibilidade (WCAG) e faço deploy na AWS.",
  "Gosto de traduzir problemas reais de quem usa o produto em interfaces simples, seguras e escaláveis.",
];

export type Curiosidade = { tema: string; icone: string; texto: string };

export const curiosidades: Curiosidade[] = [
  { tema: "Música", icone: "music", texto: "Sou músico: toco bateria e canto na igreja." },
  { tema: "Games", icone: "gamepad", texto: "Gamer de carteirinha: Warzone, FIFA e Homem-Aranha estão sempre na rotação." },
  { tema: "Futebol", icone: "ball", texto: "Palmeirense e apaixonado por futebol, tanto para assistir quanto para jogar." },
  { tema: "Jiu-jítsu", icone: "belt", texto: "Faixa branca 1º grau, treinando desde maio de 2026." },
  { tema: "Viagens", icone: "plane", texto: "Amo viajar e conhecer lugares novos." },
  { tema: "Família", icone: "heart", texto: "Nada substitui um bom tempo em família." },
];
