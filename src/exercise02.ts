class InvalidNucleotideError extends Error {
  constructor(char: string) {
    super(`Invalid DNA nucleotide: "${char}"`);
    this.name = "InvalidNucleotideError";
  }
}

export function transcribeDNA(dna: string): string {
    const dna2rna: Record<string, string> = {
        A : "U",
        T : "A",
        C : "G",
        G : "C",
    };
    

  let rna = "";
  for (const char of dna) {
    if (!(char in dna2rna)) {
      throw new InvalidNucleotideError(char);
    }
    rna += dna2rna[char];
  }
  return rna;
}