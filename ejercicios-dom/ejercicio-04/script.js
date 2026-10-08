// 1.1 addEventListener recibe el objeto del evento como parámetro de la función
const button = document.querySelector("#btnToClick");

button.addEventListener("click", (event) => {
  console.log(event);
});

// 1.2 El evento focus salta cuando se entra en el input (al hacer click o con el tabulador)
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", (event) => {
  // event.target es el elemento que ha lanzado el evento, en este caso el input
  console.log(event.target.value);
});

// 1.3 El evento input salta cada vez que cambia el texto, letra a letra
const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
