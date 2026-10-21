import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import Icon from "@/components/Icon";
import { Trilhas } from "@/components/Comece";
import styles from "@/components/Comece.module.scss";
import { abertura, conselhos, fontes, senai } from "@/data/recomendacoes";

export const metadata: Metadata = {
  title: "Comece aqui",
  description:
    "Recomendações de Gabriel Correia Reis para quem quer começar na programação: SENAI, Udemy, Curso em Vídeo e trilhas para front-end e back-end.",
  alternates: { canonical: "/comece/" },
};

export default function ComecePage() {
  return (
    <>
      <header className="page-header">
        <div className="aurora" aria-hidden><span /><span /><span /></div>
        <div className="container">
          <p className="eyebrow" data-reveal>Comece aqui</p>
          <h1 data-split>Quer começar na programação?</h1>
          <p className="lead" data-reveal>
            Cursos e caminhos que eu recomendo para quem tem curiosidade e quer dar o primeiro passo, de graça ou pagando pouco.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Mensagem do Gabriel">
        <div className={`container ${styles.abertura}`}>
          <div className={styles.carta} data-reveal>
            {abertura.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <p className={styles.assinatura}>— Gabriel Correia Reis</p>
          </div>
          <div className={styles.foto} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/hero/gabriel-pensativo.webp" alt="" width={900} height={1301} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="senai-titulo">
        <div className="container">
          <div className={styles.senai} data-reveal data-spot>
            <span className={styles.selo} aria-hidden>SENAI</span>
            <div>
              <p className="eyebrow">Minha recomendação nº 1</p>
              <h2 id="senai-titulo">{senai.titulo}</h2>
              <p>{senai.texto}</p>
              <div className={styles.senaiLinks}>
                {senai.links.map((l) => (
                  <a key={l.url} className="btn btn-ghost" href={l.url} target="_blank" rel="noopener noreferrer" data-magnetic>
                    {l.label} <Icon name="external" /> <span className="sr-only">(abre em nova aba)</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Trilhas />

      <section className={`section ${styles.conselhosSec}`} aria-labelledby="conselhos-titulo">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>O que a comunidade diz</p>
            <h2 id="conselhos-titulo" data-split>Conselhos que se repetem nos fóruns</h2>
            <p data-reveal>Pesquisei o que devs brasileiros recomendam para quem está começando. Estes pontos aparecem sempre.</p>
          </div>
          <ul className={styles.conselhos}>
            {conselhos.map((c, i) => (
              <li key={c.titulo} data-reveal data-spot>
                <h3><span className={styles.conselhoNum}>{String(i + 1).padStart(2, "0")}</span>{c.titulo}</h3>
                <p>{c.texto}</p>
              </li>
            ))}
          </ul>
          <div className={styles.fontes}>
            <p>Fontes consultadas:</p>
            <ul>
              {fontes.map((f) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer">{f.label}<span className="sr-only"> (abre em nova aba)</span></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaFinal titulo="Ficou com dúvida?" texto="Me chama no WhatsApp. Se eu puder ajudar alguém a começar, vou ficar muito feliz." proxima={{ href: "/projetos/", label: "Ver meus projetos" }} />
    </>
  );
}
