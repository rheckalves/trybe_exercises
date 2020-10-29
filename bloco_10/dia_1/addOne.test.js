const addOne = require('./addOne');
const myArray = [1, 5, 8, 10, 22];

describe('The addOne function must sum 1 in all array values without change original array.', () => {
    it('should return a new array with values + 1', () => {
        expect(addOne(myArray)).toStrictEqual([2, 6, 9, 11, 23]);
    });
    it('should NOT change the array passed as parameter', () => {
        expect(myArray).toStrictEqual([1, 5, 8, 10, 22]);
    });
    it('should be a function', () => {
        expect(typeof addOne).toBe('function');
    })
});