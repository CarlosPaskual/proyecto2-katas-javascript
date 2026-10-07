const cartoons = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

// Partimos del primer elemento como el más antiguo
let oldestCartoon = cartoons[0];

// Bucle que compara cada serie con la más antigua encontrada hasta ahora
for (const cartoon of cartoons) {
  if (cartoon.debut < oldestCartoon.debut) {
    oldestCartoon = cartoon;
  }
}

const oldestCartoonName = oldestCartoon.name;

console.log(oldestCartoonName);
