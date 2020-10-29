const sum = require('./sum');

describe('function sum must return the sum of two numbers', () => {
    test('if sum returns 0 when sum(0, 0)', () => {
        expect(sum(0, 0)).toBe(0);
    });
    test('if functon sum throws an error when a string is passed as parameter', () => {
        expect(() => sum(4, '5')).toThrowError(Error);
    });
    test('if error message is "parameters must be numbers"', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
});