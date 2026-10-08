// Función que simula la tirada de un dado con el número de caras que recibe
function rollDice(faces) {
  // Math.random() da un decimal entre 0 (incluido) y 1 (sin incluir)
  // Al multiplicarlo por las caras queda entre 0 y faces, Math.floor() quita los decimales
  // y el + 1 hace que el resultado vaya de 1 a faces en lugar de 0 a faces - 1
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));
console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(100));
