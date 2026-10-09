const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

// El evento input salta cada vez que cambia el texto, así se filtra letra a letra
input.addEventListener("input", (event) => {
  const text = event.target.value;

  // filter() se queda con los streamers cuyo nombre incluye el texto escrito
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.includes(text)
  );

  console.log(filteredStreamers);
});
