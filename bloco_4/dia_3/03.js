const n = 5;
let linha = "";
let posicao = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j < posicao) {
      linha += " ";
    } else {
      linha += "*";
    }
  }
  console.log(linha);
  linha = "";
  posicao -= 1;
}
