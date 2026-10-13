import { trajetoria } from "@/data/experiencia";
import Icon from "./Icon";
import styles from "./Trajetoria.module.scss";

export default function Trajetoria() {
  const itens = [...trajetoria].sort((a, b) => b.ordem - a.ordem);
  return (
    <section id="trajetoria" className="section" aria-labelledby="trajetoria-titulo">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Trajetória</p>
          <h2 id="trajetoria-titulo">Três empresas, sempre entre design e código</h2>
          <p>Experiência e formação lado a lado, do SENAI à Be.Aliant.</p>
        </div>

        <div className={styles.legenda} data-reveal aria-hidden>
          <span><i className={styles.lExp} /> Experiência</span>
          <span><i className={styles.lForm} /> Formação</span>
        </div>

        <div className={styles.wrap} data-timeline>
        <span className={styles.trilho} aria-hidden><span className={styles.progresso} data-timeline-bar /></span>
        <ol className={styles.timeline}>
          {itens.map((i) => (
            <li key={i.titulo} className={`${styles.item} ${styles[i.tipo]}`} data-reveal>
              <span className={styles.marcador} aria-hidden>
                <Icon name={i.tipo === "experiencia" ? "briefcase" : "cap"} size={16} />
              </span>
              <article className={styles.card}>
                <p className={styles.periodo}>
                  <span className="sr-only">{i.tipo === "experiencia" ? "Experiência" : "Formação"}: </span>
                  {i.periodo}
                </p>
                <h3>{i.titulo}</h3>
                <p className={styles.local}>{i.local}</p>
                {i.descricao && <p className={styles.desc}>{i.descricao}</p>}
              </article>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
