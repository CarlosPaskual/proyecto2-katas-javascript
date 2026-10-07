const numbers = [1, 2, 3, 5, 45, 37, 58];

// Función que devuelve la suma de todos los números del array
function sumNumbers(numberList) {
  let total = 0;

  for (let i = 0; i < numberList.length; i++) {
    total += numberList[i];
  }

  return total;
}

console.log(sumNumbers(numbers));
