"use client";

import { useEffect } from "react";

/**
 * Animações com GSAP + ScrollTrigger, carregadas só no cliente.
 * - [data-hero]       entrada do hero após o loader
 * - [data-reveal]     fade + subida ao entrar na tela (com stagger por grupo)
 * - [data-count]      números embaralham (scramble) e depois contam até o valor final
 * - [data-timeline]   linha da trajetória cresce com o scroll
 * Com prefers-reduced-motion, tudo aparece no estado final.
 */
export default function Motion() {
  useEffect(() => {
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = () => document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => (el.style.opacity = "1"));

    if (reduzido) {
      reveal();
      return;
    }

    let limpar = () => {};
    // Rede de segurança: se o GSAP falhar, nada fica invisível.
    const seguranca = setTimeout(reveal, 4000);

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      gsap.registerPlugin(ScrollTrigger);
      clearTimeout(seguranca);

      const ctx = gsap.context(() => {
        // Hero
        const hero = () => {
          gsap.from("[data-hero]", { y: 28, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 });
          gsap.from("[data-hero-foto]", { x: 40, opacity: 0, scale: 0.96, duration: 1.1, ease: "power3.out", delay: 0.15 });
        };
        if (document.documentElement.classList.contains("pronto")) hero();
        else window.addEventListener("loader:fim", hero, { once: true });

        // Reveal
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (els) =>
            gsap.fromTo(els, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true }),
        });

        // Contadores com scramble
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const final = Number(el.dataset.count);
          const digitos = String(final).length;
          const embaralhar = setInterval(() => {
            el.textContent = String(Math.floor(Math.random() * 10 ** digitos)).padStart(digitos, "0");
          }, 70);
          const obj = { v: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              clearInterval(embaralhar);
              gsap.to(obj, {
                v: final,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = String(Math.round(obj.v));
                },
              });
            },
          });
        });

        // Timeline
        const bar = document.querySelector("[data-timeline-bar]");
        if (bar) {
          gsap.fromTo(bar, { scaleY: 0 }, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-timeline]", start: "top 70%", end: "bottom 60%", scrub: 0.6 },
          });
        }
      });

      limpar = () => ctx.revert();
    })().catch(reveal);

    return () => {
      clearTimeout(seguranca);
      limpar();
    };
  }, []);

  return null;
}
