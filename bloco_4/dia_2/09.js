let arrayFor = [];
let arrayForDividioPorDois = [];

for (let i = 0; i < 25; i += 1) {
  arrayFor.push(i + 1);
}

for (let i = arrayFor.length - 1; i >= 0; i -= 1) {
  arrayForDividioPorDois.push(arrayFor[i] / 2);
}

console.log(arrayForDividioPorDois);
