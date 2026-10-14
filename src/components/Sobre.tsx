"use client";

import { useEffect, useState } from "react";
import { conceitos, curiosidades, perfil, resumo, softSkills } from "@/data/perfil";
import { versiculos } from "@/data/versiculos";
import { calcularIdade, diaDoAno } from "@/lib/utils";
import Icon from "./Icon";
import styles from "./Sobre.module.scss";

/** Cabeçalho da página Sobre: título, idade, CV e foto de estúdio com zoom no scroll. */
export function SobreHeader() {
  const [hoje, setHoje] = useState<Date | null>(null);
  useEffect(() => setHoje(new Date()), []);
  const idade = calcularIdade(perfil.nascimento, hoje ?? new Date("2026-10-13"));

  return (
    <header className={`page-header ${styles.header}`}>
      <div className="aurora" aria-hidden><span /><span /><span /></div>
      <div className={`container ${styles.headerGrid}`}>
        <div>
          <p className="eyebrow" data-reveal>Sobre mim</p>
          <h1 data-split>Design e código no mesmo lugar</h1>
          <p className="lead" data-reveal>{resumo[2]}</p>
          <p className={styles.meta} data-reveal>
            <span>{idade} anos</span>
            <span>Front-End na Be.Aliant</span>
            <span>Tecnólogo em Sistemas para Internet</span>
          </p>
          {perfil.curriculo && (
            <div className="acoes" data-reveal>
              <a className="btn btn-primary" href={perfil.curriculo} download data-magnetic>
                <Icon name="download" /> Baixar currículo
              </a>
            </div>
          )}
        </div>
        <div className={styles.foto} data-zoom>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/hero/gabriel-estudio.webp" alt="Gabriel Correia Reis em estúdio, com luz verde ao fundo"
            width={960} height={1200} />
        </div>
      </div>
    </header>
  );
}

/** Resumo: o primeiro parágrafo acende palavra por palavra. */
export function Resumo() {
  return (
    <section className="section" aria-labelledby="resumo-titulo">
      <div className="container">
        <h2 id="resumo-titulo" className="sr-only">Resumo</h2>
        <p className={styles.resumoGrande} data-fill>{resumo[0]}</p>
        <p className={styles.resumoTexto} data-reveal>{resumo[1]}</p>
      </div>
    </section>
  );
}

export function ComoTrabalho() {
  return (
    <section className={`section ${styles.como}`} aria-labelledby="como-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>Como eu trabalho</p>
          <h2 id="como-titulo" data-split>Habilidades que vão além da stack</h2>
        </div>
        <div className={styles.comoGrid}>
          <div data-reveal>
            <h3>Soft skills</h3>
            <ul className={styles.skills}>
              {softSkills.map((s, i) => (
                <li key={s} data-spot>
                  <span className={styles.skillNum}>{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h3>Conceitos que aplico</h3>
            <ul className={styles.tags}>
              {conceitos.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Curiosidades em cards empilhados (sticky): o anterior encolhe quando o próximo chega. */
export function AlemDoCodigo() {
  return (
    <section className="section" aria-labelledby="alem-titulo">
      <div className={`container ${styles.alem}`}>
        <div className={styles.alemHead}>
          <p className="eyebrow" data-reveal>Além do código</p>
          <h2 id="alem-titulo" data-split>Quem eu sou fora da tela</h2>
          <p data-reveal>Música, games, futebol, tatame, estrada e família.</p>
        </div>
        <ul className={styles.stack} data-stack>
          {curiosidades.map((c, i) => (
            <li key={c.tema} className={styles.stackCard} style={{ "--i": i } as React.CSSProperties}>
              <span className={styles.stackIcone}><Icon name={c.icone} size={30} /></span>
              <span className={styles.stackNum}>{String(i + 1).padStart(2, "0")} / {String(curiosidades.length).padStart(2, "0")}</span>
              <h3>{c.tema}</h3>
              <p>{c.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Versiculo() {
  const [hoje, setHoje] = useState<Date | null>(null);
  useEffect(() => setHoje(new Date()), []);
  const v = hoje ? versiculos[diaDoAno(hoje) % versiculos.length] : versiculos[0];
  return (
    <section className="section" aria-label="Versículo do dia">
      <div className="container">
        <figure className={styles.versiculo} data-reveal>
          <span className={styles.aspas} aria-hidden><Icon name="quote" size={32} /></span>
          <p className={styles.vLabel}>Mensagem para quem visita</p>
          <blockquote><p>“{v.texto}”</p></blockquote>
          <figcaption>{v.referencia}</figcaption>
        </figure>
      </div>
    </section>
  );
}
