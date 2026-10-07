const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

// Función que devuelve un array nuevo con el nombre y la edad actual de cada actor
function calculateActorsAges(actors) {
  // new Date() crea la fecha de hoy y getFullYear() saca su año (por ejemplo 2026)
  const currentYear = new Date().getFullYear();
  const actorsWithAges = [];

  // Bucle que calcula la edad de cada actor y la guarda en el array nuevo
  for (const actor of actors) {
    actorsWithAges.push({
      name: actor.name,
      age: currentYear - actor.born,
    });
  }

  return actorsWithAges;
}

console.log(calculateActorsAges(actors));
