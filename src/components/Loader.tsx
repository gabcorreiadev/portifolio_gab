"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";

const MIN_MS = 450;
const MAX_MS = 1200;

/** Loader de entrada: some quando fontes + foto do hero carregam, no máximo em 1,2 s. */
export default function Loader() {
  const [saindo, setSaindo] = useState(false);
  const [removido, setRemovido] = useState(false);

  useEffect(() => {
    const inicio = performance.now();
    let feito = false;
    const sair = () => {
      if (feito) return;
      feito = true;
      const espera = Math.max(0, MIN_MS - (performance.now() - inicio));
      setTimeout(() => {
        setSaindo(true);
        document.documentElement.classList.add("pronto");
        window.dispatchEvent(new Event("loader:fim"));
        setTimeout(() => setRemovido(true), 600);
      }, espera);
    };

    const limite = setTimeout(sair, MAX_MS);
    const foto = document.querySelector<HTMLImageElement>("[data-hero-foto] img");
    const fotoPronta = foto && !foto.complete
      ? new Promise((r) => { foto.addEventListener("load", r, { once: true }); foto.addEventListener("error", r, { once: true }); })
      : Promise.resolve();
    Promise.all([document.fonts?.ready ?? Promise.resolve(), fotoPronta]).then(sair);

    return () => clearTimeout(limite);
  }, []);

  if (removido) return null;
  return (
    <div className={`${styles.loader} ${saindo ? styles.saindo : ""}`} aria-hidden>
      <div className={styles.marca}>
        <span className={styles.seta}>{"=>"}</span>
        <span className={styles.letras}>GC</span>
      </div>
      <div className={styles.barra}><span /></div>
    </div>
  );
}
