// 1.1 Bucle que crea un li por cada país y lo mete en la ul
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  countriesList.appendChild(li);
}

document.body.appendChild(countriesList);

// 1.2 remove() borra el elemento del HTML
document.querySelector(".fn-remove-me").remove();

// 1.3 Igual que en 1.1, pero la ul se mete en el div con data-function="printHere"
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const carsList = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  carsList.appendChild(li);
}

document.querySelector('[data-function="printHere"]').appendChild(carsList);

// 1.4 El enunciado vuelve a llamar countries a este array, pero no se pueden
// declarar dos const con el mismo nombre, así que se le cambia el nombre
const countriesWithImages = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

// Div que agrupa la serie de divs para poder encontrarlos fácilmente después
const cardsContainer = document.createElement("div");

// Bucle que crea un div con su h4 y su img por cada elemento del array
for (const item of countriesWithImages) {
  const card = document.createElement("div");

  const title = document.createElement("h4");
  title.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  card.appendChild(title);
  card.appendChild(img);

  // 1.6 Cada div lleva su propio botón que lo elimina a él mismo
  const removeCardButton = document.createElement("button");
  removeCardButton.textContent = "Eliminar este";
  removeCardButton.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(removeCardButton);

  cardsContainer.appendChild(card);
}

// 1.5 Botón que elimina el último div de la serie
const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar el último";
removeLastButton.addEventListener("click", () => {
  // lastElementChild es el último hijo del contenedor, o null si ya no quedan
  const lastCard = cardsContainer.lastElementChild;

  if (lastCard) {
    lastCard.remove();
  }
});

// El botón va antes del contenedor para que no se mueva al borrar divs
document.body.appendChild(removeLastButton);
document.body.appendChild(cardsContainer);
