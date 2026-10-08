// 4.1 filter() crea un array nuevo solo con los valores para los que la función retorna true
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages.filter((age) => age > 18);

console.log(adults);

// 4.2 ages ya está declarado en 4.1 con los mismos valores, así que se reutiliza.
// Un número es par si el resto de dividirlo entre 2 es 0
const evenAges = ages.filter((age) => age % 2 === 0);

console.log(evenAges);

// 4.3 Se quedan solo los streamers cuyo juego es exactamente 'League of Legends'
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);

console.log(lolStreamers);

// 4.4 streamers ya está declarado en 4.3 con los mismos valores, así que se reutiliza.
// includes() distingue mayúsculas, así que solo cuenta la 'u' minúscula
const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes("u")
);

console.log(streamersWithU);

// 4.5 Primero filter() se queda con los que juegan a algo con 'Legends' y después
// map() pasa el juego a mayúsculas en los mayores de 35
const legendsStreamers = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
  .map((streamer) => {
    if (streamer.age > 35) {
      // Se crea un objeto nuevo con spread para no modificar el array original
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
      };
    }

    return streamer;
  });

console.log(legendsStreamers);
// El original sigue igual, Reven mantiene 'League of Legends' sin mayúsculas
console.log(streamers);
