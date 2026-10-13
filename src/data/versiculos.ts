export type Versiculo = { texto: string; referencia: string };

/**
 * Um versículo por dia: versiculos[diaDoAno % versiculos.length].
 * O primeiro é o fallback.
 *
 * TODO: conferir a redação de TODOS os textos na NAA (Nova Almeida Atualizada)
 * antes de publicar e completar a lista.
 */
export const versiculos: Versiculo[] = [
  {
    texto:
      "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz.",
    referencia: "Números 6:24-26",
  },
];
