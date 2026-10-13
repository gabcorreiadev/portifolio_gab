"use client";

import { useEffect, useState } from "react";
import { perfil } from "@/data/perfil";
import Icon from "./Icon";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {perfil.nome}. Feito com Next.js, TypeScript e SCSS.
        </p>
        <nav aria-label="Redes sociais" className={styles.redes}>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)"><Icon name="linkedin" /></a>
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)"><Icon name="github" /></a>
          <a href={perfil.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (abre em nova aba)"><Icon name="instagram" /></a>
          <a href={`mailto:${perfil.email}`} aria-label={`E-mail: ${perfil.email}`}><Icon name="mail" /></a>
        </nav>
      </div>
      <a href="#inicio" className={`${styles.topo} ${visivel ? styles.visivel : ""}`} aria-label="Voltar ao topo"
        tabIndex={visivel ? 0 : -1}>
        <Icon name="arrowUp" size={20} />
      </a>
    </footer>
  );
}
