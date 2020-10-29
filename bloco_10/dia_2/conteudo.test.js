const conteudo = require('./conteudo');
const { SumNumbers, findAnimalsByType, getListAnimals } = conteudo;

test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })

  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
  });

