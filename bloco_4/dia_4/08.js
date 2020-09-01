const array1 = [5, 3, 1, 4, 20, 2, 7, 10, 30, 2];
const array2 = [24, 5, 8, 15, 65, 9, 54, 18, 14, 87];

const verificaMenorInteiro = arrayInteiros => {
let array = arrayInteiros;
let menorInteiro = array[0];
let indiceDoMenorInteiro = 0;

for (let indice in array) {
      for (let i = 0; i < array.length; i += 1) {
          if (array[indice] < array[i] && array[indice] < menorInteiro) {
            menorInteiro = array[indice];
            indiceDoMenorInteiro = indice;
          }         
      }
  }
  return `\nMenor número inteiro: ${menorInteiro}\nÍndice do menor número inteiro: ${indiceDoMenorInteiro}\n`
};

console.log(verificaMenorInteiro(array1));
console.log(verificaMenorInteiro(array2));
