// 3.1 map() recorre el array y crea uno nuevo con lo que retorna la función en cada vuelta
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userNames = users.map((user) => user.name);

console.log(userNames);

// 3.2 users ya está declarado en 3.1 con los mismos valores, así que se reutiliza
const anacletoNames = users.map((user) => {
  // startsWith() comprueba si el texto empieza por el string que recibe
  if (user.name.startsWith("A")) {
    return "Anacleto";
  }

  return user.name;
});

console.log(anacletoNames);

// 3.3 Si la ciudad está visitada se le añade el texto, si no se devuelve el nombre tal cual
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const cityNames = cities.map((city) => {
  if (city.isVisited) {
    return city.name + " (Visitado)";
  }

  return city.name;
});

console.log(cityNames);
