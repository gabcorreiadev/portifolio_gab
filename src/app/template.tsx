"use client";

import { useEffect, useState } from "react";
import { scrollParaTopo } from "@/lib/scroll";

// Fica true depois da primeira página: só as navegações seguintes mostram a cortina.
let jaNavegou = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [cortina, setCortina] = useState(false);

  useEffect(() => {
    if (jaNavegou) {
      setCortina(true);
      scrollParaTopo(true);
      const t = setTimeout(() => setCortina(false), 900);
      return () => clearTimeout(t);
    }
    jaNavegou = true;
  }, []);

  return (
    <>
      {cortina && <div className="page-curtain" aria-hidden />}
      <div
        className={jaNavegou ? "page-enter" : undefined}
        // Remove a classe ao terminar: nenhum estilo de animação fica pendurado no wrapper
        onAnimationEnd={(e) => e.target === e.currentTarget && e.currentTarget.classList.remove("page-enter")}
      >
        {children}
      </div>
    </>
  );
}
