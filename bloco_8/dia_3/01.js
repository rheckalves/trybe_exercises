    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const concatenate = (acc, values) => acc.concat(values);
  return arrays.reduce(concatenate);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);