const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

// Función que suma los números y la longitud de los strings del array
function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      total += list[i];
    } else {
      total += list[i].length;
    }
  }

  return total;
}

console.log(averageWord(mixedElements));
