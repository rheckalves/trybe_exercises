const n = 5;
let srtingAsteriscos = "";
if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      srtingAsteriscos += "*";
    }
    console.log(srtingAsteriscos);
    srtingAsteriscos = "";
  }
} else {
  console.log("NÚmero menor que 1!");
}
