const n = 5;
let linha = "";
let meioDaPiramide = Math.ceil(n / 2);
let referenciaEsquerda = meioDaPiramide;
let referenciaDireita = meioDaPiramide;

for (let i = 0; i <= meioDaPiramide; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j > referenciaDireita && j < referenciaEsquerda) {
      linha += "*";
    } else {
      linha += " "
    }
  }
  console.log(linha);
  linha = "";
  referenciaEsquerda += 1;
  referenciaDireita -= 1;
}
