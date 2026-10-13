import { perfil, whatsappUrl } from "@/data/perfil";
import { depoimentosPublicados } from "@/data/depoimentos";
import { empresas } from "@/data/experiencia";
import Icon from "./Icon";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [primeiro, ...resto] = perfil.nome.split(" ");
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo">
      <div className={styles.grid} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <div className={styles.texto}>
          <p className="eyebrow" data-hero>Olá, eu sou</p>
          <h1 id="hero-titulo" className={styles.nome} data-hero>
            {primeiro}
            <br />
            <span>{resto.join(" ")}</span>
          </h1>
          <p className={styles.cargo} data-hero>{perfil.cargo}</p>

          <ul className={styles.focos} data-hero aria-label="Áreas de atuação">
            {perfil.focos.map((f) => (
              <li key={f}><span aria-hidden>{"=> "}</span>{f}</li>
            ))}
          </ul>

          <p className={styles.apoio} data-hero>{perfil.fraseApoio}</p>

          <div className={styles.ctas} data-hero>
            <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" /> Vamos conversar
              <span className="sr-only">(abre o WhatsApp em nova aba)</span>
            </a>
            <a className="btn btn-ghost" href="#projetos">
              Ver projetos <Icon name="arrowRight" />
            </a>
            {perfil.curriculo && (
              <a className={styles.cv} href={perfil.curriculo} download>
                <Icon name="download" size={18} /> Baixar currículo (PDF)
              </a>
            )}
          </div>

          {depoimentosPublicados.length > 0 && (
            <p className={styles.prova} data-hero>
              Recomendado por profissionais da {empresas.slice(0, -1).join(", ")} e {empresas[empresas.length - 1]}
            </p>
          )}
        </div>

        <div className={styles.foto} data-hero-foto>
          <div className={styles.glow} aria-hidden />
          <div className={styles.ring} aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={perfil.foto} alt="Gabriel Correia Reis sorrindo, de óculos, jaqueta preta e camiseta branca"
            width={900} height={1379} fetchPriority="high" decoding="async" />
          <div className={`${styles.badge} ${styles.badgeTop}`} aria-hidden>
            <code>{"<Front-End />"}</code>
          </div>
          <div className={`${styles.badge} ${styles.badgeBottom}`} aria-hidden>
            <span className={styles.dot} /> Disponível para conversar
          </div>
        </div>
      </div>
      <a href="#sobre" className={styles.scroll} aria-label="Rolar para a seção Sobre">
        <span />
      </a>
    </section>
  );
}
