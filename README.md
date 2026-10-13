# Proyecto 2: Katas JavaScript

Ejercicios de práctica de JavaScript del Máster, organizados en tres bloques: fundamentos del lenguaje, manipulación del DOM y ES6 con asincronía.

## Estructura

```text
proyecto2-katas-javascript/
├── ejercicios-basicos-avanzados/   # 42 ejercicios de fundamentos
│   ├── ejercicio-01.js
│   ├── ...
│   └── ejercicio-42.js
├── ejercicios-dom/                 # 5 ejercicios de manipulación del DOM
│   ├── ejercicio-01/
│   │   ├── index.html
│   │   └── script.js
│   ├── ...
│   └── ejercicio-05/
│       ├── index.html
│       ├── script.js
│       └── style.css
└── ejercicios-es6-asincronia/      # 9 ejercicios de ES6 y peticiones a APIs
    ├── ejercicio-01.js
    ├── ...
    ├── ejercicio-05/
    │   ├── index.html
    │   └── script.js
    ├── ...
    ├── ejercicio-08/
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    └── ejercicio-09/
        ├── index.html
        └── script.js
```

- **ejercicios-basicos-avanzados:** variables, condicionales, bucles, funciones, arrays y objetos.
- **ejercicios-dom:** seleccionar, crear, insertar y eliminar elementos, y responder a eventos.
- **ejercicios-es6-asincronia:** destructuring, spread, `map`, `filter`, `reduce` y peticiones con `fetch` a la [Thrones API](https://thronesapi.com/) y la [PokeAPI](https://pokeapi.co/).

## Cómo ejecutarlos

Los ejercicios que son un `.js` suelto se ejecutan con Node:

```bash
node ejercicios-basicos-avanzados/ejercicio-01.js
```

Los que tienen carpeta propia (todos los de `ejercicios-dom` y los ejercicios 05, 08 y 09 de `ejercicios-es6-asincronia`) se abren en el navegador: abre su `index.html` directamente o con la extensión Live Server de VS Code. Según el ejercicio, el resultado se ve en la página o en la consola del navegador (F12).

Los ejercicios 08 y 09 de ES6 piden datos a una API, así que necesitan conexión a internet.

## Autor

Carlos Pascual Geler
