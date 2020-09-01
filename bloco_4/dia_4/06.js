function verificaSeEhPalindromo(palavra) {
  let palavraString = "";
  palavraString = palavra;
  let palavraAoContrario = "";

  for (let i = palavraString.length - 1; i >= 0; i -= 1) {
    palavraAoContrario += palavraString[i];
  }

  if (palavra === palavraAoContrario) {
    console.log("É um palíndromo!");
    return true;
  } else {
    console.log("Não é um palíndromo!");
    return false;
  }
}

verificaSeEhPalindromo("arara");
verificaSeEhPalindromo("abelha");