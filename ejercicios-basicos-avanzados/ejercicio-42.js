const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Función que intercambia los valores de dos posiciones del array
function swap(array, index1, index2) {
  // Se guarda el primer valor en una variable auxiliar para no perderlo al sobrescribirlo
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

// swap modifica el array original, así que cada ejemplo parte del resultado del anterior
console.log(swap(fantasticFour, 0, 3));
console.log(swap(fantasticFour, 1, 2));
