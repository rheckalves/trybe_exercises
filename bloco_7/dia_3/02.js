const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

let arr = [1, 2, 4];
let expected = myRemove([1, 2, 3, 4], 3);

assert.deepStrictEqual(expected, arr, '[1, 2, 4] expeced.');

arr = [1, 2, 3, 4];
assert.notDeepStrictEqual(expected, arr, '[1, 2, 3, 4] not expeced.');

assert.notDeepStrictEqual(expected, arr, 'array not modifyied.');

expected = myRemove([1, 2, 3, 4], 5);

assert.deepStrictEqual(expected, arr, '[1, 2, 3, 4] expected')