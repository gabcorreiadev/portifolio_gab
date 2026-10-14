import Link from "next/link";
import { perfil } from "@/data/perfil";
import { projetos } from "@/data/projetos";
import { grupos, nomeStack } from "@/data/stacks";
import Icon from "../Icon";
import Numeros from "../Numeros";
import styles from "./Home.module.scss";

/** Frase grande que acende palavra por palavra enquanto a seção fica fixa. */
export function Manifesto() {
  return (
    <section id="manifesto" className={styles.manifesto} data-fill-pin aria-label="Manifesto">
      <div className="container">
        <p className="eyebrow">O que eu faço</p>
        <p className={styles.manifestoTexto} data-fill-text>
          Eu transformo protótipos em interfaces rápidas, acessíveis e fiéis ao design. Do Figma ao deploy, cada
          detalhe pensado para quem usa o produto.
        </p>
      </div>
    </section>
  );
}

/** Duas faixas infinitas de tecnologias, em sentidos opostos. */
export function StacksMarquee() {
  const todas = grupos.flatMap((g) => g.itens);
  const metade = Math.ceil(todas.length / 2);
  const faixas = [todas.slice(0, metade), todas.slice(metade)];
  return (
    <section className={styles.marqueeSec} aria-labelledby="stacks-home">
      <h2 id="stacks-home" className="sr-only">Tecnologias</h2>
      <ul className="sr-only">
        {todas.map((s) => <li key={s.id}>{s.nome}</li>)}
      </ul>
      {faixas.map((faixa, i) => (
        <div key={i} className={`marquee ${i === 1 ? "marquee-reverse" : ""}`} aria-hidden>
          {[0, 1].map((copia) => (
            <div key={copia} className="marquee-track">
              {faixa.map((s) => (
                <span key={s.id} className={styles.chip}>
                  <Icon name={s.id} size={22} brandColor />
                  {s.nome}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export function NumerosHome() {
  return (
    <section className="section" aria-labelledby="numeros-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Em números</p>
          <h2 id="numeros-titulo" data-split>Três anos entre design e código</h2>
        </div>
        <Numeros />
      </div>
    </section>
  );
}

/** Galeria fixa que rola na horizontal no desktop (no mobile vira carrossel com swipe). */
export function ProjetosHorizontal() {
  return (
    <section className={styles.hscroll} data-hscroll aria-labelledby="projetos-home">
      <div className={`container ${styles.hscrollHead}`}>
        <div>
          <p className="eyebrow">Projetos</p>
          <h2 id="projetos-home">Do Figma ao deploy</h2>
        </div>
        <Link href="/projetos/" className="btn btn-ghost" data-magnetic>
          Todos os projetos <Icon name="arrowRight" />
        </Link>
      </div>
      <ul className={styles.track} data-hscroll-track>
        {projetos.slice(0, 6).map((p, i) => (
          <li key={p.slug} className={styles.slide} data-spot>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.slideImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.banner} alt="" width={960} height={600} loading="lazy" decoding="async" />
              <span className="sr-only">Abrir {p.nome} em nova aba</span>
            </a>
            <div className={styles.slideInfo}>
              <span className={styles.slideNum}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.nome}</h3>
                <p>{p.stacks.map(nomeStack).join(" · ")}</p>
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.slideLink}
                aria-label={`Ver o site ${p.nome} (abre em nova aba)`}>
                <Icon name="external" size={18} />
              </a>
            </div>
          </li>
        ))}
        <li className={`${styles.slide} ${styles.slideFim}`}>
          <Link href="/projetos/">
            <span>Ver todos os detalhes</span>
            <Icon name="arrowRight" size={32} />
          </Link>
        </li>
      </ul>
      <div className={`container ${styles.progresso}`} aria-hidden>
        <span data-hscroll-bar />
      </div>
    </section>
  );
}

const paginas = [
  { href: "/sobre/", num: "01", titulo: "Sobre", texto: "Quem sou, como trabalho, stacks e o que faço além do código." },
  { href: "/trajetoria/", num: "02", titulo: "Trajetória", texto: "De 2023 até hoje: Paynet, Revizia, Be.Aliant e as formações." },
  { href: "/projetos/", num: "03", titulo: "Projetos", texto: "Seis sites publicados, com stack, banner e link para cada um." },
  { href: "/contato/", num: "04", titulo: "Contato", texto: "WhatsApp, e-mail, redes e uma mensagem pronta para enviar." },
];

export function Explorar() {
  return (
    <section className="section" aria-labelledby="explorar-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Explore</p>
          <h2 id="explorar-titulo" data-split>Conheça cada parte do meu trabalho</h2>
        </div>
        <ul className={styles.explorar}>
          {paginas.map((p) => (
            <li key={p.href} data-reveal>
              <Link href={p.href} className={styles.explorarCard} data-spot>
                <span className={styles.explorarNum}>{p.num}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                <span className={styles.explorarSeta} aria-hidden><Icon name="arrowRight" size={22} /></span>
              </Link>
            </li>
          ))}
        </ul>
        {perfil.curriculo && (
          <a href={perfil.curriculo} download className={styles.cvFaixa} data-reveal data-spot>
            <span className={styles.cvIcone}><Icon name="download" size={24} /></span>
            <span>
              <strong>Prefere o resumo em PDF?</strong>
              <span>Baixe meu currículo atualizado</span>
            </span>
            <Icon name="arrowRight" size={22} />
          </a>
        )}
      </div>
    </section>
  );
}
