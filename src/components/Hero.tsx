import { perfil, whatsappUrl } from "@/data/perfil";
import { depoimentosPublicados } from "@/data/depoimentos";
import { empresas } from "@/data/experiencia";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./Hero.module.scss";

const formatarLista = (l: readonly string[]) =>
  l.length <= 1 ? l.join("") : `${l.slice(0, -1).join(", ")} e ${l[l.length - 1]}`;

export default function Hero() {
  const [primeiro, ...resto] = perfil.nome.split(" ");
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo" data-hero-scroll>
      <div className="aurora" aria-hidden><span /><span /><span /></div>
      <div className={styles.grid} aria-hidden />
      <div className={styles.bgText} aria-hidden data-hero-bg>
        FRONT-END · UX/UI · ACESSIBILIDADE · FRONT-END · UX/UI
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.texto} data-hero-texto>
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
            <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-magnetic>
              <Icon name="whatsapp" /> Vamos conversar
              <span className="sr-only">(abre o WhatsApp em nova aba)</span>
            </a>
            <Link className="btn btn-ghost" href="/projetos/" data-magnetic>
              Ver projetos <Icon name="arrowRight" />
            </Link>
            {perfil.curriculo && (
              <a className={styles.cv} href={perfil.curriculo} download>
                <Icon name="download" size={18} /> Baixar currículo (PDF)
              </a>
            )}
          </div>

          {depoimentosPublicados.length > 0 && (
            <a href="#depoimentos" className={styles.prova} data-hero>
              Recomendado por profissionais da {formatarLista(empresas.filter((e) => depoimentosPublicados.some((d) => d.empresa === e)))}
            </a>
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
      <a href="#manifesto" className={styles.scroll} aria-label="Rolar para baixo">
        <span />
      </a>
    </section>
  );
}
