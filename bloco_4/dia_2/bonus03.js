const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i + 1] === undefined) {
    result = numbers[i] * 2;
    newNumbers.push(result);
  } else {
    result = numbers[i] * numbers[i + 1];
    newNumbers.push(result);
  }
}

console.log(newNumbers);
