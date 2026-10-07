const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

// Función que busca los mutantes con un poder concreto y devuelve un mensaje con el resultado
function findMutantByPower(mutants, power) {
  const foundMutants = [];

  // Bucle que guarda el nombre de todos los mutantes que tienen ese poder
  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length === 0) {
    return `No se ha encontrado ningún mutante con el poder ${power}`;
  }

  if (foundMutants.length === 1) {
    return `Se ha encontrado un mutante con el poder ${power}: ${foundMutants[0]}`;
  }

  return `Se han encontrado ${foundMutants.length} mutantes con el poder ${power}: ${foundMutants.join(", ")}`;
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "invisibility"));

// Prueba con varios mutantes que comparten el mismo poder
const moreMutants = [...mutants, { name: "Emma Frost", power: "telepathy" }];
console.log(findMutantByPower(moreMutants, "telepathy"));
