export type Stack = { id: string; nome: string };
export type GrupoStack = { titulo: string; itens: Stack[] };

export const grupos: GrupoStack[] = [
  {
    titulo: "Front-End",
    itens: [
      { id: "html", nome: "HTML5" },
      { id: "css", nome: "CSS3" },
      { id: "sass", nome: "SASS" },
      { id: "javascript", nome: "JavaScript" },
      { id: "typescript", nome: "TypeScript" },
      { id: "react", nome: "React" },
      { id: "nextjs", nome: "Next.js" },
      { id: "angular", nome: "Angular" },
      { id: "rxjs", nome: "RxJS" },
    ],
  },
  {
    titulo: "Design",
    itens: [
      { id: "figma", nome: "Figma" },
      { id: "uxui", nome: "UX/UI" },
      { id: "wcag", nome: "WCAG" },
    ],
  },
  {
    titulo: "Cloud e ferramentas",
    itens: [
      { id: "aws", nome: "AWS" },
      { id: "git", nome: "Git" },
      { id: "bitbucket", nome: "Bitbucket" },
      { id: "jira", nome: "Jira" },
      { id: "azuredevops", nome: "Azure DevOps" },
      { id: "hubspot", nome: "HubSpot" },
    ],
  },
];

/** Nome legível de uma stack pelo id (usado nos cards de projeto). */
export const nomeStack = (id: string) =>
  grupos.flatMap((g) => g.itens).find((s) => s.id === id)?.nome ?? id;
