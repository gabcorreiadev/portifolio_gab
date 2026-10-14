"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis, setLenis } from "@/lib/scroll";

// A posição de scroll é restaurada por nós (depois que pins e efeitos existem), não pelo navegador.
const CHAVE_SCROLL = "scroll-pos";
let restaurado = false;

/**
 * Motor de animações do site (GSAP + ScrollTrigger + SplitText + Lenis).
 * Cada efeito é ligado por um atributo data-* no HTML, então as páginas só declaram o que querem:
 *
 *  data-reveal          sobe com fade ao entrar na tela (stagger por lote)
 *  data-split           título entra palavra por palavra, de dentro de uma máscara
 *  data-fill            texto "acende" palavra por palavra conforme o scroll (estilo Apple)
 *  data-fill-pin        igual ao data-fill, mas a seção fica fixa enquanto o texto acende
 *  data-parallax="0.2"  desloca no eixo Y em velocidade diferente do scroll
 *  data-zoom            imagem abre de um recorte arredondado e desfaz o zoom no scroll
 *  data-hscroll         galeria fixa que rola na horizontal (desktop)
 *  data-stack           cards empilhados: o anterior encolhe quando o próximo chega
 *  data-hero-scroll     hero se afasta ao rolar (foto cresce, texto sobe)
 *  data-count           número embaralha e conta até o valor final
 *  data-timeline        linha da trajetória cresce com o scroll
 *  data-year-step       passos que trocam o ano gigante fixo (data-year-display)
 *  data-magnetic        botão segue levemente o cursor
 *  data-spot            card com luz que segue o cursor (só CSS + variáveis)
 *
 * Com prefers-reduced-motion, nada disso roda: tudo aparece no estado final.
 */
export default function Effects() {
  const pathname = usePathname();

  // Smooth scroll e spotlight: uma vez por sessão
  useEffect(() => {
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-spot]");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const salvar = () => {
      try {
        sessionStorage.setItem(CHAVE_SCROLL, JSON.stringify({ p: location.pathname, y: window.scrollY }));
      } catch {
        /* sem sessionStorage */
      }
    };
    window.addEventListener("pagehide", salvar);

    if (reduzido)
      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pagehide", salvar);
      };

    let destruir = () => {};
    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -88 } });
      setLenis(lenis);
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      destruir = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        setLenis(null);
      };
    })();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pagehide", salvar);
      destruir();
    };
  }, []);

  // Efeitos da página atual: recriados a cada troca de rota
  useEffect(() => {
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mostrarTudo = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => (el.style.opacity = "1"));

    if (reduzido) {
      mostrarTudo();
      return;
    }

    const seguranca = setTimeout(mostrarTudo, 4000);
    let limpar = () => {};
    let cancelado = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/SplitText"),
      ]);
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);
      clearTimeout(seguranca);
      await document.fonts?.ready;
      if (cancelado) return;

      const mm = gsap.matchMedia();
      const splits: SplitText[] = [];
      const intervals: number[] = [];
      const offs: (() => void)[] = [];
      const contadores: { el: HTMLElement; iniciar: () => void }[] = [];

      const ctx = gsap.context(() => {
        /* ---------- Hero ---------- */
        const entradaHero = () => {
          gsap.from("[data-hero]", { y: 40, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.09 });
          gsap.from("[data-hero-foto]", { y: 60, opacity: 0, scale: 0.92, duration: 1.3, ease: "power4.out", delay: 0.1 });
        };
        if (document.querySelector("[data-hero]")) {
          if (document.documentElement.classList.contains("pronto")) entradaHero();
          else {
            window.addEventListener("loader:fim", entradaHero, { once: true });
            offs.push(() => window.removeEventListener("loader:fim", entradaHero));
          }
        }

        document.querySelectorAll<HTMLElement>("[data-hero-scroll]").forEach((hero) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
          tl.to(hero.querySelector("[data-hero-texto]"), { y: -120, opacity: 0.1, ease: "none" }, 0)
            .to(hero.querySelector("[data-hero-foto] img"), { y: 70, scale: 1.08, ease: "none" }, 0)
            .to(hero.querySelectorAll("[data-hero-bg]"), { xPercent: -18, ease: "none" }, 0);
        });

        /* ---------- Títulos com SplitText ---------- */
        document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
          const s = SplitText.create(el, { type: "lines,words", mask: "lines", linesClass: "split-line" });
          splits.push(s);
          gsap.from(s.words, {
            yPercent: 110,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        /* ---------- Texto que acende ---------- */
        const fill = (el: HTMLElement, pin: boolean) => {
          const alvo = el.querySelector<HTMLElement>("[data-fill-text]") ?? el;
          const s = SplitText.create(alvo, { type: "words" });
          splits.push(s);
          gsap.fromTo(s.words, { opacity: 0.14 }, {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: pin
              ? { trigger: el, start: "top top", end: "+=140%", scrub: true, pin: true }
              : { trigger: alvo, start: "top 80%", end: "bottom 50%", scrub: true },
          });
        };
        document.querySelectorAll<HTMLElement>("[data-fill]").forEach((el) => fill(el, false));
        mm.add("(min-width: 900px)", () => {
          document.querySelectorAll<HTMLElement>("[data-fill-pin]").forEach((el) => fill(el, true));
        });
        mm.add("(max-width: 899px)", () => {
          document.querySelectorAll<HTMLElement>("[data-fill-pin]").forEach((el) => fill(el, false));
        });

        /* ---------- Reveal ---------- */
        gsap.set("[data-reveal]", { opacity: 0, y: 40 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }),
        });

        /* ---------- Parallax ---------- */
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const v = Number(el.dataset.parallax || 0.2);
          gsap.fromTo(el, { yPercent: -v * 50 }, {
            yPercent: v * 50,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        /* ---------- Zoom de imagem com recorte ---------- */
        document.querySelectorAll<HTMLElement>("[data-zoom]").forEach((wrap) => {
          const img = wrap.querySelector("img");
          gsap.fromTo(wrap, { clipPath: "inset(10% 8% 10% 8% round 28px)" }, {
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top 95%", end: "center 55%", scrub: true },
          });
          if (img)
            gsap.fromTo(img, { scale: 1.3 }, {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
            });
        });

        /* ---------- Galeria horizontal fixa ---------- */
        mm.add("(min-width: 900px)", () => {
          document.querySelectorAll<HTMLElement>("[data-hscroll]").forEach((sec) => {
            const track = sec.querySelector<HTMLElement>("[data-hscroll-track]");
            if (!track) return;
            const distancia = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
            const barra = sec.querySelector("[data-hscroll-bar]");
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sec,
                start: "top top",
                end: () => `+=${distancia()}`,
                pin: true,
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
            tl.to(track, { x: () => -distancia(), ease: "none" }, 0);
            if (barra) tl.fromTo(barra, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
          });
        });

        /* ---------- Cards empilhados ---------- */
        // O card de trás só encolhe e escurece de leve quando o próximo está quase cobrindo ele
        document.querySelectorAll<HTMLElement>("[data-stack]").forEach((lista) => {
          const cards = Array.from(lista.children) as HTMLElement[];
          cards.forEach((card, i) => {
            const prox = cards[i + 1];
            if (!prox) return;
            const topoProx = parseFloat(getComputedStyle(prox).top) || 120;
            gsap.fromTo(card, { scale: 1, "--sombra": 0 }, {
              scale: 0.94,
              "--sombra": 0.55,
              ease: "none",
              scrollTrigger: { trigger: prox, start: `top ${topoProx + 220}px`, end: `top ${topoProx}px`, scrub: true },
            });
          });
        });

        /* ---------- Contadores ---------- */
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const digitos = String(el.dataset.count).length;
          const id = window.setInterval(() => {
            el.textContent = String(Math.floor(Math.random() * 10 ** digitos)).padStart(digitos, "0");
          }, 70);
          intervals.push(id);
          const obj = { v: 0 };
          let iniciado = false;
          const iniciar = () => {
            if (iniciado) return;
            iniciado = true;
            clearInterval(id);
            // Lido na hora: o valor pode ter sido atualizado (ex.: números do GitHub ao vivo)
            const final = Number(el.dataset.count);
            gsap.to(obj, {
              v: final,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = String(Math.round(obj.v));
              },
            });
          };
          contadores.push({ el, iniciar });
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: iniciar,
          });
        });

        /* ---------- Linha da timeline ---------- */
        document.querySelectorAll<HTMLElement>("[data-timeline]").forEach((tl) => {
          const bar = tl.querySelector("[data-timeline-bar]");
          if (bar)
            gsap.fromTo(bar, { scaleY: 0 }, {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: tl, start: "top 70%", end: "bottom 60%", scrub: 0.6 },
            });
        });

        /* ---------- Ano gigante ---------- */
        const display = document.querySelector<HTMLElement>("[data-year-display]");
        if (display) {
          const obj = { v: Number(display.textContent) || 2023 };
          document.querySelectorAll<HTMLElement>("[data-year-step]").forEach((step) => {
            ScrollTrigger.create({
              trigger: step,
              start: "top 55%",
              end: "bottom 55%",
              onToggle: (self) => {
                step.classList.toggle("is-active", self.isActive);
                if (!self.isActive) return;
                gsap.to(obj, {
                  v: Number(step.dataset.yearStep),
                  duration: 0.8,
                  ease: "power3.out",
                  overwrite: true,
                  onUpdate: () => {
                    display.textContent = String(Math.round(obj.v));
                  },
                });
              },
            });
          });
        }

        /* ---------- Botões magnéticos ---------- */
        if (window.matchMedia("(hover: hover)").matches) {
          document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
            const mover = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
            };
            const sair = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", mover);
            el.addEventListener("pointerleave", sair);
            offs.push(() => {
              el.removeEventListener("pointermove", mover);
              el.removeEventListener("pointerleave", sair);
            });
          });
        }
      });

      // Recalcula quando as imagens terminarem de carregar
      const imgs = Array.from(document.images).filter((i) => !i.complete);
      let pendentes = imgs.length;
      const refresh = () => {
        if (--pendentes <= 0) {
          ScrollTrigger.refresh();
          sincronizar();
        }
      };
      imgs.forEach((i) => i.addEventListener("load", refresh, { once: true }));
      /**
       * Rede de segurança: tudo que já está na tela (ou acima dela) aparece, mesmo que
       * a animação de entrada não tenha disparado (ex.: recarregar no meio da página).
       */
      const sincronizar = () => {
        const limite = window.innerHeight * 0.95;
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          if (Number(getComputedStyle(el).opacity) < 0.05 && el.getBoundingClientRect().top < limite)
            gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", overwrite: true });
        });
        splits.forEach((sp) => {
          const alvo = (sp.elements?.[0] as HTMLElement | undefined) ?? null;
          if (alvo && alvo.getBoundingClientRect().top < limite)
            gsap.to(sp.words, { yPercent: 0, duration: 0.6, ease: "power3.out", overwrite: true });
        });
        contadores.forEach((c) => c.el.getBoundingClientRect().top < limite && c.iniciar());
      };

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        // Só no primeiro carregamento: volta para onde a pessoa estava antes de recarregar
        if (!restaurado) {
          restaurado = true;
          try {
            const salvo = JSON.parse(sessionStorage.getItem(CHAVE_SCROLL) || "null");
            if (salvo && salvo.p === location.pathname && salvo.y > 0) {
              const lenis = getLenis();
              if (lenis) {
                lenis.resize(); // atualiza a altura conhecida da página (pins já criados)
                lenis.scrollTo(salvo.y, { immediate: true, force: true });
              }
              else window.scrollTo(0, salvo.y);
              ScrollTrigger.update();
            }
          } catch {
            /* ok */
          }
        }
        requestAnimationFrame(sincronizar);
      });
      window.addEventListener("load", sincronizar, { once: true });
      offs.push(() => window.removeEventListener("load", sincronizar));

      limpar = () => {
        intervals.forEach(clearInterval);
        offs.forEach((f) => f());
        ctx.revert();
        mm.revert();
        splits.forEach((s) => s.revert());
      };
    })().catch(mostrarTudo);

    return () => {
      cancelado = true;
      clearTimeout(seguranca);
      limpar();
    };
  }, [pathname]);

  return null;
}
