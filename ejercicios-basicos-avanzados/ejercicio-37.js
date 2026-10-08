const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = [];

// Bucle que recorre cada película y después cada una de sus categorías
for (const movie of movies) {
  for (const category of movie.categories) {
    // includes() comprueba si la categoría ya está en el array para no repetirla
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log(categorias);
