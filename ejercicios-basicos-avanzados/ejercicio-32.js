const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1961 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

// Función que devuelve el miembro de los X-Men con el año de aparición más antiguo
function findOldestXMen(xMen) {
  // Partimos del primer miembro como el más antiguo
  let oldestMember = xMen[0];

  // Bucle que compara cada miembro con el más antiguo encontrado hasta ahora
  for (const member of xMen) {
    if (member.year < oldestMember.year) {
      oldestMember = member;
    }
  }

  return oldestMember;
}

console.log(findOldestXMen(xMen));
