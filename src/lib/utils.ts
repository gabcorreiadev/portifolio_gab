/** Idade completa a partir de uma data ISO (yyyy-mm-dd). */
export function calcularIdade(nascimentoISO: string, hoje = new Date()): number {
  const [a, m, d] = nascimentoISO.split("-").map(Number);
  let idade = hoje.getFullYear() - a;
  const antesDoAniversario =
    hoje.getMonth() + 1 < m || (hoje.getMonth() + 1 === m && hoje.getDate() < d);
  if (antesDoAniversario) idade--;
  return idade;
}

/** Anos completos desde uma data ISO (mínimo 1). */
export function anosDesde(inicioISO: string, hoje = new Date()): number {
  return Math.max(1, calcularIdade(inicioISO, hoje));
}

/** Dia do ano, de 0 a 365. */
export function diaDoAno(data = new Date()): number {
  const inicio = new Date(data.getFullYear(), 0, 0);
  return Math.floor((data.getTime() - inicio.getTime()) / 86_400_000);
}

export function iniciais(nome: string): string {
  const partes = nome.split(" ").filter(Boolean);
  return ((partes[0]?.[0] ?? "") + (partes[partes.length - 1]?.[0] ?? "")).toUpperCase();
}
