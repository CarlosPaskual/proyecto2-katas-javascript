const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

// Función que busca un nombre en el array y devuelve si existe y su posición
function nameFinder(nameList, nameToFind) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      return { found: true, position: i };
    }
  }

  return false;
}

console.log(nameFinder(names, "Natasha"));
console.log(nameFinder(names, "Thor"));
