import { projetos } from "@/data/projetos";
import { nomeStack } from "@/data/stacks";
import Icon from "./Icon";
export { default as GradeProjetos } from "./GradeProjetos";
import styles from "./Projetos.module.scss";

const comoFoiFeito = [
  { titulo: "Stack", texto: "Next.js com export estático, TypeScript, SCSS Modules, GSAP (ScrollTrigger e SplitText) e Lenis para o scroll suave. Deploy automático na Netlify." },
  { titulo: "Design system", texto: "Tokens de cor em variáveis CSS, tema claro e escuro sem flash e paleta verde, preta e branca." },
  { titulo: "Movimento", texto: "Animações ligadas ao scroll declaradas por atributos no HTML, sempre com fallback para movimento reduzido." },
  { titulo: "Acessibilidade e performance", texto: "WCAG 2.1 AA nos dois temas, navegação por teclado, imagens WebP e lazy loading." },
  { titulo: "IA no processo", texto: "IA como apoio no planejamento, na documentação e na construção, com revisão e decisões humanas." },
];

/** Projetos com destaque: true — blocos grandes com o efeito de zoom no scroll. */
export function ProjetosDestaque() {
  const lista = projetos.filter((p) => p.destaque);
  return (
    <section className="section" aria-labelledby="destaques-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Em destaque</p>
          <h2 id="destaques-titulo" className="sr-only">Projetos em destaque</h2>
        </div>
        <ol className={styles.lista}>
          {lista.map((p, i) => (
            <li key={p.slug} className={styles.item}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.banner} data-zoom>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.banner} alt="" width={960} height={600} loading="lazy" decoding="async" />
                <span className="sr-only">Abrir o site {p.nome} em nova aba</span>
              </a>
              <div className={styles.info}>
                <span className={styles.num} data-reveal>{String(i + 1).padStart(2, "0")}</span>
                <h2 data-split>{p.nome}</h2>
                <p data-reveal>{p.descricao}</p>
                {p.destaques && (
                  <ul className={styles.destaques} data-reveal>
                    {p.destaques.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
                <ul className={styles.stacks} aria-label={`Tecnologias de ${p.nome}`} data-reveal>
                  {p.stacks.map((s) => (
                    <li key={s}>
                      <Icon name={s} size={16} />
                      <span>{nomeStack(s)}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.links} data-reveal>
                  <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer" data-magnetic>
                    Ver site <Icon name="external" /> <span className="sr-only">(abre em nova aba)</span>
                  </a>
                  {p.repo && (
                    <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer" data-magnetic>
                      <Icon name="github" /> Repositório <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ComoFoiFeito() {
  return (
    <section className="section" aria-labelledby="bastidores-titulo">
      <div className={`container ${styles.comoFeito}`} data-reveal>
        <div>
          <p className="eyebrow">Bastidores</p>
          <h2 id="bastidores-titulo">Como este site foi feito</h2>
        </div>
        <dl>
          {comoFoiFeito.map((c) => (
            <div key={c.titulo}>
              <dt>{c.titulo}</dt>
              <dd>{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
