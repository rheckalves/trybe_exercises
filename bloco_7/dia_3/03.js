const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  if (typeof(arr) !== 'object') {
    throw new Error('First parameter must be an Array.');
  }
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
console.log(expected);

assert.throws(() => {
  myRemoveWithoutCopy(2, 3);
}, /^Error: First parameter must be an Array.$/);

assert.deepStrictEqual(expected, [1, 2, 4], 'expected [1, 2, 4].');
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], '[1, 2, 3, 4] NOT expected.');

let arr = [1, 2, 3, 4];
myRemoveWithoutCopy(arr, 1);
assert.strictEqual(arr.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);




