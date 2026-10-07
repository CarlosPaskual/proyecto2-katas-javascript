const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

// Función que devuelve un objeto con las veces que se repite cada palabra
function repeatCounter(list) {
  const counter = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
}

console.log(repeatCounter(words));
