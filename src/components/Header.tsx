"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/perfil";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.scss";

export type LinkNav = { href: string; label: string };

export default function Header({ links }: { links: LinkNav[] }) {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const secoes = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => e.isIntersecting && setAtivo(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    secoes.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <header className={`${styles.header} ${rolou ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo} aria-label="Gabriel Correia Reis — início">
          <span className={styles.logoMark} aria-hidden>{"=>"}</span>
          <span>gab<strong>correia</strong></span>
        </a>

        <nav aria-label="Navegação principal" className={`${styles.nav} ${aberto ? styles.open : ""}`} id="menu-principal">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={ativo === l.href ? "true" : undefined}
                  className={ativo === l.href ? styles.active : ""} onClick={() => setAberto(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={`btn btn-primary ${styles.ctaMobile}`} href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Vamos conversar <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a className={`btn btn-primary ${styles.cta}`} href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Vamos conversar <span className="sr-only">(abre o WhatsApp em nova aba)</span>
          </a>
          <button type="button" className={`${styles.iconBtn} ${styles.burger}`} aria-expanded={aberto}
            aria-controls="menu-principal" aria-label={aberto ? "Fechar menu" : "Abrir menu"} onClick={() => setAberto(!aberto)}>
            <Icon name={aberto ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
