"use client";

import { useEffect, useState } from "react";
import { perfil } from "@/data/perfil";
import { projetos } from "@/data/projetos";
import { empresas, trajetoria } from "@/data/experiencia";
import { anosDesde } from "@/lib/utils";
import styles from "./Numeros.module.scss";

export default function Numeros() {
  const [hoje, setHoje] = useState<Date | null>(null);
  useEffect(() => setHoje(new Date()), []);
  const anos = anosDesde(perfil.naAreaDesde, hoje ?? new Date("2026-10-13"));
  const formacoes = trajetoria.filter((t) => t.tipo === "formacao").length;

  const numeros = [
    { valor: anos, sufixo: "+", label: "anos na área", detalhe: "desde 2023" },
    { valor: empresas.length, sufixo: "", label: "empresas", detalhe: empresas.join(" · ") },
    { valor: projetos.length, sufixo: "+", label: "projetos publicados", detalhe: "Next.js, React, Vite e mais" },
    { valor: formacoes, sufixo: "", label: "formações e certificações", detalhe: "SENAI, Estácio, AWS" },
  ];

  return (
    <ul className={styles.numeros} aria-label="Números">
      {numeros.map((n) => (
        <li key={n.label} data-reveal data-spot>
          <strong>
            <span data-count={n.valor}>{n.valor}</span>
            {n.sufixo}
          </strong>
          <span className={styles.label}>{n.label}</span>
          <span className={styles.detalhe}>{n.detalhe}</span>
        </li>
      ))}
    </ul>
  );
}
