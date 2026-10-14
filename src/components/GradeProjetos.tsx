"use client";

import { useMemo, useState } from "react";
import { projetos } from "@/data/projetos";
import { nomeStack } from "@/data/stacks";
import Icon from "./Icon";
import styles from "./GradeProjetos.module.scss";

/**
 * Todos os projetos que não estão em destaque, em cards, com filtro por tecnologia.
 * Escala bem: com 10, 20 ou 30 projetos a página continua do mesmo tamanho por linha.
 */
export default function GradeProjetos() {
  const lista = projetos.filter((p) => !p.destaque);
  const [filtro, setFiltro] = useState("todas");

  // Só oferece filtros de tecnologias que aparecem em 2 ou mais projetos
  const filtros = useMemo(() => {
    const cont = new Map<string, number>();
    lista.flatMap((p) => p.stacks).forEach((s) => cont.set(s, (cont.get(s) ?? 0) + 1));
    return [...cont.entries()].filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]).map(([s]) => s);
  }, [lista]);

  const visiveis = filtro === "todas" ? lista : lista.filter((p) => p.stacks.includes(filtro));
  if (lista.length === 0) return null;

  return (
    <section className={`section ${styles.secao}`} aria-labelledby="todos-titulo">
      <div className="container">
        <div className={styles.topo}>
          <div>
            <p className="eyebrow" data-reveal>Todos os projetos</p>
            <h2 id="todos-titulo" data-split>Mais trabalhos</h2>
          </div>
          <p className={styles.contagem} aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? "projeto" : "projetos"}
          </p>
        </div>

        {filtros.length > 1 && (
          <div className={styles.filtros} role="group" aria-label="Filtrar projetos por tecnologia" data-reveal>
            <button type="button" aria-pressed={filtro === "todas"} className={filtro === "todas" ? styles.ativo : ""}
              onClick={() => setFiltro("todas")}>
              Todas
            </button>
            {filtros.map((s) => (
              <button key={s} type="button" aria-pressed={filtro === s} className={filtro === s ? styles.ativo : ""}
                onClick={() => setFiltro(s)}>
                <Icon name={s} size={15} /> {nomeStack(s)}
              </button>
            ))}
          </div>
        )}

        <ul className={styles.grade}>
          {visiveis.map((p) => (
            <li key={p.slug} className={styles.card} data-spot>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.banner} tabIndex={-1} aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.banner} alt="" width={960} height={600} loading="lazy" decoding="async" />
                <span className={styles.overlay}>
                  Abrir site <Icon name="external" size={16} />
                </span>
              </a>
              <div className={styles.corpo}>
                <div className={styles.icones} aria-label={`Tecnologias: ${p.stacks.map(nomeStack).join(", ")}`} role="img">
                  {p.stacks.slice(0, 5).map((s) => (
                    <span key={s} title={nomeStack(s)}><Icon name={s} size={16} brandColor /></span>
                  ))}
                  {p.stacks.length > 5 && <span className={styles.mais}>+{p.stacks.length - 5}</span>}
                </div>
                <h3>{p.nome}</h3>
                <p>{p.descricao}</p>
                {p.destaques?.[0] && <p className={styles.destaque}><span aria-hidden>{"=> "}</span>{p.destaques[0]}</p>}
                <div className={styles.links}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    Ver site <Icon name="arrowRight" size={16} />
                    <span className="sr-only">: {p.nome} (abre em nova aba)</span>
                  </a>
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.repo}>
                      <Icon name="github" size={16} /> Código
                      <span className="sr-only"> de {p.nome} (abre em nova aba)</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
