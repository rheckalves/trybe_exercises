const array1 = [1, 3, 6, 4, 20, 2, 7, 10, 30, 2];
const array2 = [24, 5, 8, 15, 65, 9, 54, 18, 14, 87];

const verificaMaiorInteiro = arrayInteiros => {
let array = arrayInteiros;
let maiorInteiro = 0;
let indiceDoMaiorInteiro = 0;

for (let indice in array) {
      for (let i = 0; i < array.length; i += 1) {
          if (array[indice] > array[i] && array[indice] > maiorInteiro) {
            maiorInteiro = array[indice];
            indiceDoMaiorInteiro = indice;
          }         
      }
  }
  return `\nMaior número inteiro: ${maiorInteiro}\nÍndice do maior número inteiro: ${indiceDoMaiorInteiro}\n`
};

console.log(verificaMaiorInteiro(array1));
console.log(verificaMaiorInteiro(array2));
