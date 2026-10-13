import { projetos } from "@/data/projetos";
import { nomeStack } from "@/data/stacks";
import Icon from "./Icon";
import SmartImage from "./SmartImage";
import styles from "./Projetos.module.scss";

const comoFoiFeito = [
  { titulo: "Stack", texto: "Next.js com export estático, TypeScript, SCSS Modules e GSAP + ScrollTrigger. Deploy automático na Netlify." },
  { titulo: "Design system", texto: "Tokens de cor em variáveis CSS, tema claro e escuro sem flash e paleta verde, preta e branca." },
  { titulo: "UX", texto: "Página única pensada para recrutadores (respostas em segundos) e para devs (detalhes técnicos à mão)." },
  { titulo: "Acessibilidade e performance", texto: "WCAG 2.1 AA nos dois temas, navegação por teclado, movimento reduzido, imagens WebP e lazy loading." },
  { titulo: "IA no processo", texto: "IA como apoio no planejamento, na documentação e na construção, com revisão e decisões humanas." },
];

export default function Projetos() {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-titulo">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Projetos</p>
          <h2 id="projetos-titulo">Do Figma ao deploy</h2>
          <p>Projetos publicados. Clique no banner para abrir o site.</p>
        </div>

        <ul className={styles.lista}>
          {projetos.map((p) => (
            <li key={p.slug} className={`${styles.card} ${p.destaque ? styles.destaque : ""}`} data-reveal>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.banner}>
                <SmartImage src={p.banner} alt="" width={960} height={600} wrapperClassName={styles.bannerImg} />
                <span className="sr-only">Abrir o site {p.nome} em nova aba</span>
                <span className={styles.abrir} aria-hidden><Icon name="external" size={18} /></span>
              </a>
              <div className={styles.corpo}>
                <h3>{p.nome}</h3>
                <p>{p.descricao}</p>
                <ul className={styles.stacks} aria-label={`Tecnologias de ${p.nome}`}>
                  {p.stacks.map((s) => (
                    <li key={s} title={nomeStack(s)}>
                      <Icon name={s} size={16} />
                      <span>{nomeStack(s)}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    Ver site <Icon name="arrowRight" size={16} />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" size={16} /> Repositório
                      <span className="sr-only">(abre em nova aba)</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.comoFeito} data-reveal>
          <div>
            <p className="eyebrow">Bastidores</p>
            <h3>Como este site foi feito</h3>
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
      </div>
    </section>
  );
}
