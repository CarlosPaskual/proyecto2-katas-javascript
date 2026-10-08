// 2.1 Los ... sacan todos los valores del array y los corchetes los meten en uno nuevo
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

// 2.2 Igual que con el array, pero con llaves se crea un objeto nuevo
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy };

console.log(toyCopy);

// 2.3 pointsList ya está declarado en 2.1 con los mismos valores, así que se reutiliza
const pointsLis2 = [54, 87, 99, 65, 32];

const allPoints = [...pointsList, ...pointsLis2];

console.log(allPoints);

// 2.4 toy ya está declarado en 2.2 con los mismos valores, así que se reutiliza
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fullToy = { ...toy, ...toyUpdate };

console.log(fullToy);

// 2.5 Se hace la copia con spread y se borra la posición 2 solo de la copia,
// así el array original no cambia
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colorsCopy);
console.log(colors);
