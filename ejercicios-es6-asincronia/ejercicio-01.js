// 1.1 Las llaves sacan las propiedades del objeto a variables con el mismo nombre
const game = {
  title: "The Last of Us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(title, gender, year);

// 1.2 Los corchetes sacan los valores del array por orden de posición
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// 1.3 La función devuelve un objeto, así que se puede desestructurar directamente
// lo que retorna. name se renombra a animalName porque en 1.4 hace falta otra
// variable llamada name y no se pueden declarar dos const con el mismo nombre
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: animalName, race } = animalFunction();

console.log(animalName, race);

// 1.4 Primero se desestructura el objeto y después el array que hay en itv
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;
const [itvYear1, itvYear2, itvYear3] = itv;

console.log(name, itv);
console.log(itvYear1, itvYear2, itvYear3);
