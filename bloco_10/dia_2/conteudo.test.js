const conteudo = require('./conteudo');
const { SumNumbers, getListAnimals } = conteudo;

// test('Testando SumNumbers, soma 5 mais 10', done => {
//     SumNumbers(5, 10, (result) => {
//       expect(result).toBe(15);
//       done();
//     });
//   })

//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', () => {
//       expect.assertions(2);
//       return getListAnimals('Dog').then(listDogs => {
//         expect(listDogs[0].name).toEqual('Dorminhoco');
//         expect(listDogs[1].name).toEqual('Soneca');
//       });
//     });
//   });

//   describe('Quando o tipo do animal NÃO existe', () => {
//     test('Retorne erro ao não encontrar animais', () => {
//         expect.assertions(1);
//         return getListAnimals('Lion').catch(error => 
//         expect(error).toStrictEqual({ error: "Não possui esse tipo de animal." })
//         );
//     });
//   });

// describe('Testando promise - findAnimalsByType', () => {
//     describe('Quando o tipo do animal existe', () => {
//       test('Retorne a lista de animais', () => {
//         const listDogs = [
//           { name: 'Dorminhoco', age: 1, type: 'Dog' },
//           { name: 'Soneca', age: 2, type: 'Dog' },
//         ]
//         expect.assertions(1);
//         return expect(getListAnimals('Dog')).resolves.toStrictEqual(listDogs)
//       });
//     });
  
//     describe('Quando o tipo de animal não existe', () => {
//       test('Retorna um erro', () => {
//         expect.assertions(1);
//         return expect(getListAnimals('Lion')).rejects.toStrictEqual({ error: 'Não possui esse tipo de animal.' })
//       });
//     });
//   });

describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
        const listDogs = [
            { name: 'Dorminhoco', age: 1, type: 'Dog' },
            { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        await expect(getListAnimals('Dog')).resolves.toStrictEqual(listDogs)
    });
});

describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toStrictEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });

