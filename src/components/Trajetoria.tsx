import { marcos, trajetoria } from "@/data/experiencia";
import Icon from "./Icon";
import styles from "./Trajetoria.module.scss";

/** Ano gigante fixo à esquerda; os marcos rolam à direita e trocam o ano. */
export function Anos() {
  return (
    <section className={styles.anos} aria-labelledby="anos-titulo">
      <div className={`container ${styles.anosGrid}`}>
        <div className={styles.anoFixo}>
          <p className="eyebrow">Linha do tempo</p>
          <h2 id="anos-titulo" className="sr-only">Marcos por ano</h2>
          <p className={styles.anoGigante} aria-hidden>
            <span data-year-display>{marcos[0].ano}</span>
          </p>
        </div>
        <ol className={styles.passos}>
          {marcos.map((m) => (
            <li key={m.ano} className={styles.passo} data-year-step={m.ano}>
              <span className={styles.passoAno}>{m.ano}</span>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Timeline() {
  const itens = trajetoria.filter((t) => t.tipo === "experiencia").sort((a, b) => b.ordem - a.ordem);
  return (
    <section className="section" aria-labelledby="exp-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Experiência</p>
          <h2 id="exp-titulo" data-split>Onde trabalhei</h2>
        </div>
        <div className={styles.wrap} data-timeline>
          <span className={styles.trilho} aria-hidden><span className={styles.progresso} data-timeline-bar /></span>
          <ol className={styles.timeline}>
            {itens.map((i) => (
              <li key={i.titulo} className={styles.item} data-reveal>
                <span className={styles.marcador} aria-hidden><Icon name="briefcase" size={16} /></span>
                <article className={styles.card} data-spot>
                  <p className={styles.periodo}>{i.periodo}</p>
                  <h3>{i.titulo}</h3>
                  <p className={styles.local}>{i.local}</p>
                  {i.descricao && (
                    <ul className={styles.desc}>
                      {i.descricao.replace(/\.$/, "").split("; ").map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Formacao() {
  const itens = trajetoria.filter((t) => t.tipo === "formacao").sort((a, b) => b.ordem - a.ordem);
  return (
    <section className={`section ${styles.formacaoSec}`} aria-labelledby="form-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Formação</p>
          <h2 id="form-titulo" data-split>Estudo contínuo</h2>
        </div>
        <ul className={styles.formacao}>
          {itens.map((f) => (
            <li key={f.titulo} data-reveal data-spot>
              <span className={styles.formIcone}><Icon name="cap" size={22} /></span>
              <p className={styles.periodo}>{f.periodo}</p>
              <h3>{f.titulo}</h3>
              <p className={styles.local}>{f.local}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
