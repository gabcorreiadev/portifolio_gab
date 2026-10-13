"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import styles from "./Header.module.scss";

type Tema = "light" | "dark";

export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema>("light");

  useEffect(() => {
    setTema((document.documentElement.getAttribute("data-theme") as Tema) ?? "light");
  }, []);

  const alternar = () => {
    const novo: Tema = tema === "dark" ? "light" : "dark";
    setTema(novo);
    document.documentElement.setAttribute("data-theme", novo);
    try {
      localStorage.setItem("tema", novo);
    } catch {
      /* navegação privada: segue sem salvar */
    }
  };

  const escuro = tema === "dark";
  return (
    <button type="button" className={styles.iconBtn} onClick={alternar} aria-pressed={escuro}
      aria-label={escuro ? "Ativar tema claro" : "Ativar tema escuro"} title={escuro ? "Tema claro" : "Tema escuro"}>
      <Icon name={escuro ? "sun" : "moon"} size={20} />
    </button>
  );
}
