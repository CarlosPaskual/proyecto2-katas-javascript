// 2.1 createElement crea el elemento en memoria y appendChild lo mete al final del body
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Primero se mete la p dentro del div y después el div en el body
const divWithP = document.createElement("div");
const pInsideDiv = document.createElement("p");
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

// 2.3 Bucle que crea 6 p y las va metiendo en el mismo div
const divWithSixP = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  divWithSixP.appendChild(p);
}

document.body.appendChild(divWithSixP);

// 2.4 textContent pone el texto dentro del elemento
const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

// 2.5 Se pone h2 delante de la clase porque hay divs que también tienen .fn-insert-here
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Bucle que crea un li por cada app y lo mete en la ul
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 remove() borra el elemento del HTML, se recorre la lista para borrarlos todos
const nodesToRemove = document.querySelectorAll(".fn-remove-me");

for (const node of nodesToRemove) {
  node.remove();
}

// 2.8 Los dos primeros div del documento son los del HTML original, porque los
// creados antes se añadieron al final del body. insertBefore mete la p justo
// antes del segundo div, es decir, entre los dos
const divs = document.querySelectorAll("div");
const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";
document.body.insertBefore(middleP, divs[1]);

// 2.9 Bucle que crea una p nueva para cada div, porque un mismo elemento
// solo puede estar en un sitio del HTML a la vez
const insertHereDivs = document.querySelectorAll("div.fn-insert-here");

for (const div of insertHereDivs) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}
