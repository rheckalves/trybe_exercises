let peca = "peão";
peca = peca.toUpperCase();

switch (peca) {
    case "BISPO":
       return console.log("Diagonal");
       break;
    case "PEÃO":
        return console.log("Uma casa à frente");
        break;
    default:
        return console.log("Peça inválida!");
}