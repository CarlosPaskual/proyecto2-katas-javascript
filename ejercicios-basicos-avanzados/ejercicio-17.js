const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

// Bucle for...in que muestra cada propiedad del alienígena con su valor
for (const key in alien) {
  console.log("La propiedad " + key + " tiene cómo valor: " + alien[key]);
}
