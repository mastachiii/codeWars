function dnaStrand(dna) {
 if (dna.includes('A') || dna.includes('T')){
  filter = dna.replaceAll('A', 'T');
  return filter
 }
}

console.log(dnaStrand("ATTGC"));
