"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navegacao, perfil, whatsappUrl } from "@/data/perfil";
import { scrollParaTopo } from "@/lib/scroll";
import Icon from "./Icon";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [visivel, setVisivel] = useState(false);
  const [ano, setAno] = useState(2026);

  useEffect(() => {
    setAno(new Date().getFullYear());
    const onScroll = () => setVisivel(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.marca}>
          <p className={styles.frase}>Interfaces rápidas, acessíveis e fiéis ao design.</p>
          <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-magnetic>
            <Icon name="whatsapp" /> Vamos conversar <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>

        <nav aria-label="Páginas" className={styles.col}>
          <p className={styles.titulo}>Páginas</p>
          <ul>
            {navegacao.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.titulo}>Contato</p>
          <ul>
            <li><a href={`mailto:${perfil.email}`}>{perfil.email}</a></li>
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{perfil.whatsapp.exibicao}</a></li>
            {perfil.curriculo && (
              <li><a href={perfil.curriculo} download className={styles.cv}><Icon name="download" size={16} /> Currículo (PDF)</a></li>
            )}
          </ul>
        </div>
      </div>

      {/* Marca decorativa desenhada via CSS (::before/::after), fora da árvore de acessibilidade */}
      <div className={`container ${styles.wordmark}`} aria-hidden data-a="gab" data-b="correia" />

      <div className={`container ${styles.base}`}>
        <p>© {ano} {perfil.nome}. Feito com Next.js, TypeScript, SCSS e GSAP.</p>
        <nav aria-label="Redes sociais" className={styles.redes}>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)"><Icon name="linkedin" /></a>
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)"><Icon name="github" /></a>
          <a href={perfil.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (abre em nova aba)"><Icon name="instagram" /></a>
        </nav>
      </div>

      <button type="button" onClick={() => scrollParaTopo()} className={`${styles.topo} ${visivel ? styles.visivel : ""}`}
        aria-label="Voltar ao topo" tabIndex={visivel ? 0 : -1}>
        <Icon name="arrowUp" size={20} />
      </button>
    </footer>
  );
}
