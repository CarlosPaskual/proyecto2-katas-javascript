const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

// Función que devuelve el string más largo (si hay empate, el primero)
function findLongestWord(stringList) {
  let longestWord = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers));
