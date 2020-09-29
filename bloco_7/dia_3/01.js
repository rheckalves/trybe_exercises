const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
let expected = sum(4, 5);
assert(expected === 9, 'four plus five is nine');

expected = sum(0, 0);
assert.strictEqual(expected, 0, 'zero plus zero is zero')

//sum(4, '5');