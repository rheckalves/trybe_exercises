const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numerosImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 3 === 0) {
    numerosImpares += 1;
  }
}

if (numerosImpares > 0) {
  console.log(`Foram encontrados ${numerosImpares} números ímpares no Array!`);
} else {
  console.log("Não foram encontrados números ímpares no Array!");
}
