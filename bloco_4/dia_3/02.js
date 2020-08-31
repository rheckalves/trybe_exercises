const n = 5;
let srtingAsteriscos = "";
if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    srtingAsteriscos += "*";
    console.log(srtingAsteriscos);
  }
} else {
  console.log("NÚmero menor que 1!");
}
