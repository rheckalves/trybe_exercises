const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
let mediaAritimetica = 0;

for (let i = 0; i < numbers.length; i += 1) {
  somaArray += numbers[i];
}

mediaAritimetica = somaArray / numbers.length;

if (mediaAritimetica > 20) {
  return console.log("Valor maior que 20!");
} else {
  return console.log("Valor menor que 20!");
}
