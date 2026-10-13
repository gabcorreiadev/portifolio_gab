# Portfólio — Gabriel Correia Reis

Site pessoal de página única publicado em **gabcorreia.com.br**.

**Stack:** Next.js 15 (App Router, export estático) · TypeScript · SCSS Modules · GSAP + ScrollTrigger · Simple Icons · Netlify

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

Imagens ficam em `public/img/` (`hero/`, `projetos/`, `depoimentos/`). Use WebP; depoimentos em 400×400.

**Currículo em PDF:** coloque o arquivo em `public/cv/curriculo-gabriel-correia-reis.pdf` e preencha `curriculo` em `perfil.ts` — o botão aparece sozinho no hero.

## Deploy na Netlify

1. Suba o repositório em github.com/gabcorreiadev.
2. Na Netlify: *Add new site → Import from Git*. O `netlify.toml` já define build (`npm run build`) e pasta (`out`).
3. Em *Domain management*, adicione `gabcorreia.com.br` e siga as instruções de DNS.

## Pendências (TODO no código)

- Confirmar as stacks de Box na Veia, Tracker de Estreias e Anil Jeans; adicionar links de repositório.
- Confirmar o título do cargo na Revizia e a instituição da formação Azure.
- Conferir a redação NAA dos versículos e completar a lista.
- Foto do Ricardo A. Santos e os textos dos 8 depoimentos.
- Publicar o currículo em PDF.
