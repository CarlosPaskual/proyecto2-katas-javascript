const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Objeto donde cada clave es el nombre de un sonido y su valor las veces que se repite
const soundsCount = {};

// for...of recorre el array de usuarios
for (const user of users) {
  // for...in recorre los nombres de los sonidos favoritos de cada usuario
  for (const sound in user.favoritesSounds) {
    // Si el sonido ya está en el objeto se suma 1, si no se crea con valor 1
    if (soundsCount[sound]) {
      soundsCount[sound]++;
    } else {
      soundsCount[sound] = 1;
    }
  }
}

console.log(soundsCount);
