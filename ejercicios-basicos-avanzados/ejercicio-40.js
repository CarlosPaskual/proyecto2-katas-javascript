const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Función que devuelve la posición del texto en el array, o -1 si no está
function findArrayIndex(array, text) {
  // Bucle que recorre las posiciones del array comparando cada valor con el texto
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }

  return -1;
}

console.log(findArrayIndex(mainCharacters, "Luke")); // 0
console.log(findArrayIndex(mainCharacters, "Chewbacca")); // 3
console.log(findArrayIndex(mainCharacters, "Obi-Wan")); // 6
console.log(findArrayIndex(mainCharacters, "Yoda")); // -1

// Función que elimina el texto del array usando la posición que da findArrayIndex
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  // Solo se elimina si el texto existe, porque splice(-1, 1) borraría el último elemento
  if (index !== -1) {
    // splice(index, 1) quita 1 elemento a partir de esa posición
    array.splice(index, 1);
  }

  return array;
}

// splice modifica el array original, así que cada ejemplo parte del resultado del anterior
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Luke"));
console.log(removeItem(mainCharacters, "Obi-Wan"));
console.log(removeItem(mainCharacters, "Yoda"));
