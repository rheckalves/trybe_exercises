const assert = require('assert');
const { access } = require('fs/promises');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    const numberOfLettersAByWord = curr.toUpperCase().split('').reduce((accumulator, current) => {
      return current === 'A' ? accumulator + 1 : accumulator;
      }, 0);
     return acc + numberOfLettersAByWord;
  }, 0);
}

assert.deepEqual(containsA(), 20);
