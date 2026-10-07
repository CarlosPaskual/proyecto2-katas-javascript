const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

// Función que devuelve la duración media de las películas recibidas
function averageMovieDuration(movies) {
  let totalDuration = 0;

  // Bucle que suma la duración de todas las películas
  for (const movie of movies) {
    totalDuration += movie.duration;
  }

  return totalDuration / movies.length;
}

console.log(averageMovieDuration(movies));
