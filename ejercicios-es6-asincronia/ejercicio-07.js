const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

// 7.1 find() retorna el primer género que sea 'RPG', o undefined si no hay ninguno.
// filter() trata 'RPG' como true y undefined como false, así que solo se queda con los RPG
const rpgGames = videogames.filter((videogame) =>
  videogame.genders.find((gender) => gender === "RPG")
);

console.log(rpgGames);

// Se suman las notas de los RPG con reduce() y se divide entre cuántos hay
const rpgAverageScore =
  rpgGames.reduce((total, videogame) => total + videogame.score, 0) /
  rpgGames.length;

console.log(rpgAverageScore);
