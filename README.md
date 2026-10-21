# Portfólio — Gabriel Correia Reis

Site pessoal publicado em **gabcorreia.com.br**, com seis páginas: Início, Sobre, Trajetória, Projetos, Comece aqui e Contato.

**Stack:** Next.js 15 (App Router, export estático) · TypeScript · SCSS Modules · GSAP (ScrollTrigger + SplitText) · Lenis · Simple Icons · Netlify

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera o site estático em /out
```

Ver os depoimentos com texto de exemplo (antes de receber os reais): `http://localhost:3000/?preview=depoimentos`

## Onde editar o conteúdo

Tudo fica em `src/data/` — não é preciso mexer nos componentes.

| Arquivo | O que tem |
| --- | --- |
| `perfil.ts` | nome, cargo, links, WhatsApp, resumo, curiosidades, caminho do currículo |
| `stacks.ts` | grupos de tecnologias |
| `experiencia.ts` | experiências e formações da timeline |
| `projetos.ts` | cards de projeto |
| `depoimentos.ts` | depoimentos (o card só aparece quando `texto` estiver preenchido) |
| `versiculos.ts` | versículo do dia (NAA) |
| `github.ts` | números do GitHub (fallback) |
| `recomendacoes.ts` | página Comece aqui: texto de abertura, SENAI, trilhas, cursos e conselhos |

Imagens ficam em `public/img/` (`hero/`, `projetos/`, `depoimentos/`). Use WebP; depoimentos em 400×400.

**Currículo em PDF:** fica em `public/cv/curriculo-gabriel-correia-reis.pdf`. Para atualizar, é só substituir o arquivo mantendo o nome. Ele aparece no header (CV), no hero, no menu mobile, nas páginas Sobre, Trajetória e Contato, nos CTAs e no rodapé.

## Páginas

| Rota | Arquivo | Conteúdo |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Hero, manifesto, marquee de stacks, números, galeria horizontal de projetos, depoimentos (carrossel) |
| `/sobre/` | `src/app/sobre/page.tsx` | Resumo, soft skills, stacks, curiosidades em cards empilhados, versículo |
| `/trajetoria/` | `src/app/trajetoria/page.tsx` | Ano gigante por marco, experiência, formação |
| `/projetos/` | `src/app/projetos/page.tsx` | Destaques (`destaque: true`) em blocos grandes; o resto em cards com filtro por tecnologia; GitHub em números; bastidores |
| `/comece/` | `src/app/comece/page.tsx` | Recomendações para quem quer começar: SENAI, trilhas (conhecer, front, back) e conselhos da comunidade |
| `/contato/` | `src/app/contato/page.tsx` | Canais, mensagem pronta (WhatsApp/e-mail), currículo |

## Efeitos

Os efeitos ficam todos em `src/components/Effects.tsx` e são ligados por atributos no HTML, por exemplo `data-split` (título entra palavra por palavra), `data-fill` (texto acende no scroll), `data-zoom` (imagem abre de um recorte), `data-hscroll` (galeria horizontal fixa), `data-stack` (cards empilhados) e `data-magnetic` (botão segue o cursor). A lista completa está no comentário no topo do arquivo. Com "reduzir movimento" ativo no sistema, nada anima.

## Deploy na Netlify

1. Suba o repositório em github.com/gabcorreiadev.
2. Na Netlify: *Add new site → Import from Git*. O `netlify.toml` já define build (`npm run build`) e pasta (`out`).
3. Em *Domain management*, adicione `gabcorreia.com.br` e siga as instruções de DNS.

## Pendências (TODO no código)

- Atualizar `contribuicoes` em `src/data/github.ts` de tempos em tempos (repositórios e seguidores atualizam sozinhos).
- Confirmar o título do cargo na Revizia e a instituição da formação Azure.
- Conferir a redação NAA dos versículos e completar a lista.
- Depoimentos: publicados Gabriel Neves, Guilherme Zalla e Widiney Interaminense; faltam os textos dos outros 6.
- Corrigir no PDF do currículo: GitHub (biel5z → gabcorreiadev), “OBEJTIVO” e o cargo da Revizia.
- `src/components/Motion.tsx` não é mais usado e pode ser apagado.
