// 1.1 querySelector devuelve el primer elemento que coincide con el selector
console.log(document.querySelector(".showme"));

// 1.2 El # indica que se busca por id
console.log(document.querySelector("#pillado"));

// 1.3 querySelector solo devuelve el primero, para todos se usa querySelectorAll
console.log(document.querySelectorAll("p"));

// 1.4 El . indica que se busca por clase
console.log(document.querySelectorAll(".pokemon"));

// 1.5 Los corchetes indican que se busca por atributo
console.log(document.querySelectorAll('[data-function="testMe"]'));

// 1.6 querySelectorAll devuelve una lista con posiciones como un array, la 3ª es la posición 2
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);
