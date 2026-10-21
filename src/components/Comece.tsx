"use client";

import { useRef, useState } from "react";
import { trilhas, type Recurso } from "@/data/recomendacoes";
import Icon from "./Icon";
import styles from "./Comece.module.scss";

function CardRecurso({ r }: { r: Recurso }) {
  return (
    <li className={styles.recurso} data-spot>
      <div className={styles.recursoTopo}>
        <span className={r.gratis ? styles.gratis : styles.pago}>{r.gratis ? "Gratuito" : "Pago"}</span>
        <span className={styles.onde}>{r.onde}</span>
      </div>
      <h4>{r.nome}</h4>
      <p className={styles.quem}>{r.quem}</p>
      <p className={styles.porque}>{r.porque}</p>
      {r.info && <p className={styles.info}>{r.info}</p>}
      <a href={r.url} target="_blank" rel="noopener noreferrer" className={styles.acessar}>
        Acessar <Icon name="external" size={15} />
        <span className="sr-only">: {r.nome} (abre em nova aba)</span>
      </a>
    </li>
  );
}

/** Abas acessíveis com as três trilhas (conhecer, front-end, back-end). */
export function Trilhas() {
  const [ativa, setAtiva] = useState(trilhas[0].id);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);

  const teclado = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const prox = (i + dir + trilhas.length) % trilhas.length;
    setAtiva(trilhas[prox].id);
    abas.current[prox]?.focus();
  };

  const t = trilhas.find((x) => x.id === ativa) ?? trilhas[0];

  return (
    <section className="section" aria-labelledby="trilhas-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Trilhas</p>
          <h2 id="trilhas-titulo" data-split>Escolha por onde começar</h2>
        </div>

        <div role="tablist" aria-label="Trilhas de estudo" className={styles.abas} data-reveal>
          {trilhas.map((x, i) => (
            <button key={x.id} ref={(el) => { abas.current[i] = el; }} role="tab" type="button"
              id={`aba-${x.id}`} aria-selected={ativa === x.id} aria-controls={`painel-${x.id}`}
              tabIndex={ativa === x.id ? 0 : -1} className={ativa === x.id ? styles.abaAtiva : ""}
              onClick={() => setAtiva(x.id)} onKeyDown={(e) => teclado(e, i)}>
              <span className={styles.abaNum}>{String(i + 1).padStart(2, "0")}</span>
              {x.titulo}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`painel-${t.id}`} aria-labelledby={`aba-${t.id}`} className={styles.painel} key={t.id}>
          <div className={styles.passos}>
            <p className={styles.resumo}>{t.resumo}</p>
            <h3>O caminho que eu seguiria</h3>
            <ol>
              {t.passos.map((p) => <li key={p}>{p}</li>)}
            </ol>
          </div>
          <ul className={styles.recursos}>
            {t.recursos.map((r) => <CardRecurso key={r.nome} r={r} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
