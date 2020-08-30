const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[numbers.length - 1];

for (let i = numbers.length; i >= 0; i -= 1) {
  if (numbers[i] < numbers[i - 1] && numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log(menorNumero);
