import type Lenis from "lenis";

/** Instância única do smooth scroll (Lenis), criada em Effects.tsx. */
let lenis: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  lenis = l;
};

export const getLenis = () => lenis;

export function scrollParaTopo(imediato = false) {
  if (lenis) lenis.scrollTo(0, { immediate: imediato });
  else window.scrollTo({ top: 0, behavior: imediato ? "auto" : "smooth" });
}
