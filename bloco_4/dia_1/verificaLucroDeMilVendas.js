const valorCusto = 100, valorVenda = 160;

let imposto = 1.2;
let valorCustoTotal = valorCusto * imposto;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  return console.log("Valores inválidos!");
} else {
    return console.log(`O lucro de mil vendas do produto foi de: R$${lucro * 1000}`)
}
