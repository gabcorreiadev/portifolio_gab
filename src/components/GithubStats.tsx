"use client";

import { useEffect, useState } from "react";
import { github } from "@/data/github";
import { projetos } from "@/data/projetos";
import Icon from "./Icon";
import styles from "./GithubStats.module.scss";

type Valores = { repositorios: number; seguidores: number };
const CHAVE = "gh-stats-v2";

/** Tecnologias diferentes usadas nos projetos publicados. */
const tecnologias = new Set(projetos.flatMap((p) => p.stacks)).size;

/** Busca repositórios e seguidores na API pública; cai no valor salvo em data/github.ts. */
function useGithub(): Valores {
  const [v, setV] = useState<Valores>({
    repositorios: github.repositorios,
    seguidores: github.seguidores,
  });

  useEffect(() => {
    try {
      const cache = sessionStorage.getItem(CHAVE);
      if (cache) {
        setV(JSON.parse(cache));
        return;
      }
    } catch {
      /* sem sessionStorage: segue */
    }
    const ctrl = new AbortController();
    (async () => {
      const base = `https://api.github.com/users/${github.usuario}`;
      const u = await fetch(base, { signal: ctrl.signal }).then((r) => (r.ok ? r.json() : Promise.reject()));
      const novo: Valores = {
        repositorios: Number(u.public_repos) || github.repositorios,
        seguidores: Number(u.followers) || github.seguidores,
      };
      setV(novo);
      try {
        sessionStorage.setItem(CHAVE, JSON.stringify(novo));
      } catch {
        /* ok */
      }
    })().catch(() => {
      /* API fora ou limite atingido: mantém o fallback */
    });
    return () => ctrl.abort();
  }, []);

  return v;
}

export default function GithubStats({ titulo = true }: { titulo?: boolean }) {
  const v = useGithub();
  const itens = [
    { icone: "commit", valor: github.contribuicoes, label: "contribuições no último ano" },
    { icone: "repo", valor: v.repositorios, label: "repositórios públicos" },
    { icone: "code", valor: tecnologias, label: "tecnologias nos projetos" },
    { icone: "users", valor: v.seguidores, label: "seguidores" },
  ];

  return (
    <section className={titulo ? "section" : undefined} aria-labelledby="gh-titulo">
      <div className="container">
        <div className={styles.box} data-reveal data-spot>
          <div className={styles.topo}>
            <span className={styles.logo}><Icon name="github" size={28} /></span>
            <div>
              <p className="eyebrow">Código aberto</p>
              <h2 id="gh-titulo">GitHub em números</h2>
            </div>
            <a className="btn btn-ghost" href={github.url} target="_blank" rel="noopener noreferrer" data-magnetic>
              @{github.usuario} <Icon name="external" /> <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
          <ul className={styles.grid}>
            {itens.map((i) => (
              <li key={i.label}>
                <Icon name={i.icone} size={20} className={styles.icone} />
                <strong><span data-count={i.valor}>{i.valor}</span></strong>
                <span className={styles.label}>{i.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.nota}>Contribuições conferidas em {github.conferidoEm}; repositórios e seguidores atualizam ao vivo.</p>
        </div>
      </div>
    </section>
  );
}
