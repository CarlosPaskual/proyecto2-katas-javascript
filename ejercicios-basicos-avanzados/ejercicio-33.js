const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

// Función que devuelve la capital del país recibido o un mensaje si no está en la lista
function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  }

  return `No tengo la capital de ${country} en la lista`;
}

console.log(getCapital("Spain"));
console.log(getCapital("Hungary"));
console.log(getCapital("Japón"));
