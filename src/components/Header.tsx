"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navegacao, perfil, whatsappUrl } from "@/data/perfil";
import { getLenis } from "@/lib/scroll";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.scss";

const normalizar = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export default function Header() {
  const pathname = normalizar(usePathname() || "/");
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setAberto(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-aberto", aberto);
    if (aberto) getLenis()?.stop();
    else getLenis()?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <header className={`${styles.header} ${rolou ? styles.scrolled : ""} ${aberto ? styles.menuAberto : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Gabriel Correia Reis — início">
          <span className={styles.logoMark} aria-hidden>{"=>"}</span>
          <span>gab<strong>correia</strong></span>
        </Link>

        <nav aria-label="Navegação principal" className={`${styles.nav} ${aberto ? styles.open : ""}`} id="menu-principal">
          <ul>
            {navegacao.map((l, i) => {
              const ativo = pathname === l.href;
              return (
                <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
                  <Link href={l.href} aria-current={ativo ? "page" : undefined} className={ativo ? styles.active : ""}>
                    <span className={styles.num} aria-hidden>0{i + 1}</span>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.menuRodape}>
            {perfil.curriculo && (
              <a className="btn btn-ghost" href={perfil.curriculo} download>
                <Icon name="download" /> Baixar currículo
              </a>
            )}
            <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Vamos conversar <span className="sr-only">(abre o WhatsApp em nova aba)</span>
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          {perfil.curriculo && (
            <a className={`${styles.iconBtn} ${styles.cv}`} href={perfil.curriculo} download
              aria-label="Baixar currículo em PDF" title="Baixar currículo (PDF)">
              <Icon name="download" size={19} />
              <span className={styles.cvLabel}>CV</span>
            </a>
          )}
          <ThemeToggle />
          <a className={`btn btn-primary ${styles.cta}`} href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-magnetic>
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
