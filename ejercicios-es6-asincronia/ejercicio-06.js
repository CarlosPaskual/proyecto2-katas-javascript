const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

// 6.1 reduce() va acumulando un valor: en cada vuelta recibe lo acumulado hasta ahora
// y el elemento actual, y lo que retorna pasa a ser el nuevo acumulado.
// El 0 del final es el valor con el que empieza el acumulador
const totalScore = exams.reduce((total, exam) => total + exam.score, 0);

console.log(totalScore);

// 6.2 Se considera aprobado un 5 o más. Si el examen no está aprobado se
// retorna el total sin sumarle nada
const passedScore = exams.reduce((total, exam) => {
  if (exam.score >= 5) {
    return total + exam.score;
  }

  return total;
}, 0);

console.log(passedScore);

// 6.3 La suma ya está calculada con reduce() en 6.1, así que se reutiliza
// y se divide entre el número de exámenes
const averageScore = totalScore / exams.length;

console.log(averageScore);
