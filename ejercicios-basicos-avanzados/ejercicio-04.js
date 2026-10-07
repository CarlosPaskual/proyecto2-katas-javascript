const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 Saca a "Tendo" por consola atacando su posición
console.log(aldeanos[3]);

// 4.2 Coloca en el último lugar del array a "Cervasio"
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3 Cambia el primer elemento del array por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4 Dale la vuelta al array
aldeanos.reverse();
console.log(aldeanos);

// 4.5 Cambia a "Narciso" por "Canela" con un método de array
aldeanos.splice(aldeanos.indexOf("Narciso"), 1, "Canela");
console.log(aldeanos);

// 4.6 Imprime el último elemento sin atacar a la posición explícitamente
console.log(aldeanos[aldeanos.length - 1]);
