"use client";

import { useEffect, useMemo, useState } from "react";
import { depoimentos, type Depoimento } from "@/data/depoimentos";
import { empresas } from "@/data/experiencia";
import { iniciais } from "@/lib/utils";
import Icon from "./Icon";
import SmartImage from "./SmartImage";
import styles from "./Depoimentos.module.scss";

const TEXTO_EXEMPLO =
  "Texto de exemplo para visualizar o layout. Este card só aparece no site publicado quando o depoimento real for preenchido em src/data/depoimentos.ts.";

/**
 * Só renderiza cards com texto. Para ver o layout antes de receber os textos,
 * abra o site com ?preview=depoimentos na URL.
 */
export default function Depoimentos() {
  const [preview, setPreview] = useState(false);
  const [filtro, setFiltro] = useState<string>("Todas");

  useEffect(() => {
    setPreview(new URLSearchParams(window.location.search).get("preview") === "depoimentos");
  }, []);

  const lista: Depoimento[] = useMemo(
    () =>
      preview
        ? depoimentos.map((d) => ({ ...d, texto: d.texto || TEXTO_EXEMPLO }))
        : depoimentos.filter((d) => d.texto.trim()),
    [preview]
  );

  if (lista.length === 0) return null;

  const filtros = ["Todas", ...empresas.filter((e) => lista.some((d) => d.empresa === e))];
  const visiveis = filtro === "Todas" ? lista : lista.filter((d) => d.empresa === filtro);

  return (
    <section id="depoimentos" className={`section ${styles.secao}`} aria-labelledby="depoimentos-titulo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="depoimentos-titulo" data-split>O que dizem sobre trabalhar comigo</h2>
          {preview && <p className={styles.aviso}>Modo de pré-visualização: textos de exemplo.</p>}
        </div>

        <div className={styles.filtros} role="group" aria-label="Filtrar depoimentos por empresa">
          {filtros.map((f) => (
            <button key={f} type="button" aria-pressed={filtro === f}
              className={filtro === f ? styles.ativo : ""} onClick={() => setFiltro(f)}>
              {f}
            </button>
          ))}
        </div>

        <ul className={styles.lista} aria-live="polite">
          {visiveis.map((d) => (
            <li key={d.slug} className={styles.card} data-spot>
              <Icon name="quote" size={26} className={styles.aspas} />
              <blockquote><p>{d.texto}</p></blockquote>
              <div className={styles.autor}>
                {d.foto ? (
                  <SmartImage src={d.foto} alt={`Foto de ${d.nome}`} width={56} height={56} wrapperClassName={styles.avatar} />
                ) : (
                  <span className={`${styles.avatar} ${styles.iniciais}`} aria-hidden>{iniciais(d.nome)}</span>
                )}
                <div>
                  <p className={styles.nome}>
                    {d.nome}
                    {d.selo && <span className={styles.selo}>{d.selo}</span>}
                  </p>
                  <p className={styles.cargo}>{d.cargo}</p>
                  <p className={styles.empresa}>Trabalhamos juntos na {d.empresa}</p>
                </div>
                <a href={d.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}
                  aria-label={`LinkedIn de ${d.nome} (abre em nova aba)`}>
                  <Icon name="linkedin" size={20} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
