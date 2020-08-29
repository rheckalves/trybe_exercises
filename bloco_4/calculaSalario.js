const salarioBruto = 6000;
let aliquotaInss = 0.08;
let aliquotaIr = 0;
let parcelaIr = 0;
let aliquotaInssValor = 0;
let salarioBase = 0;
let salarioLiquido = 0;

if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
} else if (salarioBruto >= 2594.53 && salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
}

if (salarioBruto > 5189.82) {
  aliquotaInssValor = 570.88;
} else {
  aliquotaInssValor = salarioBruto * aliquotaInss;
}

salarioBase = salarioBruto - aliquotaInssValor;

if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  aliquotaIr = 0.075;
  parcelaIr = 142.8;
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
  aliquotaIr = 0.15;
  parcelaIr = 354.8;
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
  aliquotaIr = 0.225;
  parcelaIr = 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIr = 0.275;
  parcelaIr = 869.36;
}

valorIrCorrigido = salarioBase * aliquotaIr - parcelaIr;
salarioLiquido = salarioBase - valorIrCorrigido;
aliquotaIr = aliquotaIr * 100;
aliquotaIr = aliquotaIr.toFixed(2);

if (salarioBruto <= 5189.82) {
  console.log(`Salário Líquido: ${salarioLiquido}`);
  console.log(`Desconto INSS: ${aliquotaInssValor}`);
  console.log(`Alíquota INSS: ${aliquotaInss * 100}%`);
  console.log(`Alíquota IR: ${aliquotaIr * 100}%`);
  console.log(`Valor da parcela IR: ${parcelaIr}`);
} else {
  console.log(`Salário Líquido: ${salarioLiquido}`);
  console.log(`Desconto INSS: ${aliquotaInssValor}`);
  console.log(`Alíquota INSS: Alíquota máxima estipulada.`);
  console.log(`Alíquota IR: ${aliquotaIr}%`);
  console.log(`Valor da parcela IR: ${parcelaIr}`);
}
