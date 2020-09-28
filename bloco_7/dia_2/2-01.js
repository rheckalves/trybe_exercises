const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log(`\nExercise 01)\n`);
const changeObject = (object, key, value) => {
  object[key] = value;
  return false;
}

changeObject(lesson2, 'turno', 'manhã');
console.table(lesson2);

console.log(`\n\nExercise 02)\n`);

function listObjectKeys(object) {
  return Object.keys(object);
}

console.log(listObjectKeys(lesson1));


console.log(`\n\nExercise 03)\n`);

function showObjectLength(object) {
  return Object.keys(object).length;
}

console.log(showObjectLength(lesson3));


console.log(`\n\nExercise 04)\n`);

function listObjectValues(object) {
  return Object.values(object);
}

console.log(listObjectValues(lesson2));

console.log(`\n\nExercise 05)\n`);

const allLessons = { };
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
console.log(allLessons);

console.log(`\n\nExercise 06)\n`);

function calculateAllStudents(lessons) {
  let result = 0;
  for (let key in lessons) {
    let numberOfStudents = lessons[key].numeroEstudantes;
    result += numberOfStudents;
  }
  return result;
}

console.log(calculateAllStudents(allLessons));

console.log(`\n\nExercise 07)\n`);

function getValueByNumber(object, index) {
  return Object.values(object)[index];
}
console.log(getValueByNumber(lesson1, 0));

console.log(`\n\nExercise 08)\n`);

function verifyPair(object, key, value) {
  if (Object.entries(object).toString().match(`${key},${value}`)) {
    return true;
  }
  return false;
}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));