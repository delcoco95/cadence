/** Produit cartésien de fragments : alt(['A', 'B'], [' x.']) → ['A x.', 'B x.']. Sert à lister toutes les variantes acceptées. */
export const alt = (...parts: string[][]): string[] =>
  parts.reduce<string[]>((acc, p) => acc.flatMap((a) => p.map((b) => a + b)), ['']);
