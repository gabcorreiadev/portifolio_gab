"use client";

import { useEffect, useState } from "react";
import { curiosidades, perfil, resumo } from "@/data/perfil";
import { projetos } from "@/data/projetos";
import { empresas, trajetoria } from "@/data/experiencia";
import { versiculos } from "@/data/versiculos";
import { anosDesde, calcularIdade, diaDoAno } from "@/lib/utils";
import Icon from "./Icon";
import styles from "./Sobre.module.scss";

export default function Sobre() {
  // Valores dependentes da data são calculados no navegador (o HTML estático sai com o fallback).
  const [hoje, setHoje] = useState<Date | null>(null);
  useEffect(() => setHoje(new Date()), []);

  const ref = hoje ?? new Date("2026-10-13");
  const idade = calcularIdade(perfil.nascimento, ref);
  const anos = anosDesde(perfil.naAreaDesde, ref);
  const versiculo = hoje ? versiculos[diaDoAno(hoje) % versiculos.length] : versiculos[0];
  const formacoes = trajetoria.filter((t) => t.tipo === "formacao").length;

  const numeros = [
    { valor: anos, sufixo: "+", label: "anos na área", detalhe: "desde 2023" },
    { valor: empresas.length, sufixo: "", label: "empresas", detalhe: empresas.join(" · ") },
    { valor: projetos.length, sufixo: "+", label: "projetos publicados", detalhe: "no ar e no GitHub" },
    { valor: formacoes, sufixo: "", label: "formações e certificações", detalhe: "SENAI, Estácio, AWS" },
  ];

  return (
    <section id="sobre" className="section" aria-labelledby="sobre-titulo">
      <div className="container">
        <div className={styles.topo}>
          <div className="section-head" data-reveal>
            <p className="eyebrow">Sobre mim</p>
            <h2 id="sobre-titulo">Design e código no mesmo lugar</h2>
          </div>
          <div className={styles.resumo} data-reveal>
            {resumo.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            <p className={styles.meta}>
              <span>{idade} anos</span>
              <span>Front-End na Be.Aliant</span>
            </p>
          </div>
        </div>

        <ul className={styles.numeros} aria-label="Números">
          {numeros.map((n) => (
            <li key={n.label} data-reveal>
              <strong>
                <span data-count={n.valor}>{n.valor}</span>
                {n.sufixo}
              </strong>
              <span className={styles.label}>{n.label}</span>
              <span className={styles.detalhe}>{n.detalhe}</span>
            </li>
          ))}
        </ul>

        <h3 className={styles.subtitulo} data-reveal>Além do código</h3>
        <ul className={styles.curiosidades}>
          {curiosidades.map((c) => (
            <li key={c.tema} data-reveal>
              <span className={styles.icone}><Icon name={c.icone} size={22} /></span>
              <div>
                <h4>{c.tema}</h4>
                <p>{c.texto}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className={styles.versiculo} data-reveal>
          <span className={styles.aspas} aria-hidden><Icon name="quote" size={28} /></span>
          <p className={styles.vLabel}>Mensagem para quem visita</p>
          <blockquote>
            <p>“{versiculo.texto}”</p>
          </blockquote>
          <figcaption>{versiculo.referencia}</figcaption>
        </figure>
      </div>
    </section>
  );
}
