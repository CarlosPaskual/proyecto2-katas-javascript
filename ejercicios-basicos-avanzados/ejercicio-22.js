const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice de la siguiente fruta a usar, para no repetir ninguna
let fruitIndex = 0;

// Bucle for que reemplaza las comidas no veganas por frutas
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i] = { name: fruits[fruitIndex], isVegan: true };
    fruitIndex++;
  }
}

console.log(foodSchedule);
