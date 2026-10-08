const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsList = document.createElement("ul");
// La clase permite darle estilos a la lista desde el CSS
albumsList.classList.add("albums-list");

// Bucle que crea un li por cada álbum y lo mete en la ul
for (const album of albums) {
  const li = document.createElement("li");
  li.classList.add("album");
  li.textContent = album;
  albumsList.appendChild(li);
}

document.querySelector('[data-function="printAlbums"]').appendChild(albumsList);
