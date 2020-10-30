const getUserName = require('./02');

describe('verify if getUserName return an user name or an error', () => {
    it('should return an user name when receive an existing ID', () => {
        expect.assertions(1);
        return getUserName(4)
        .then(result =>
            expect(result).toEqual('Mark'));
    });

    it('should retun an error when receive an inexisting ID', () => {
        expect.assertions(1);
        return getUserName(2)
        .catch(error =>
            expect(error).toEqual({ error: 'User with 2 not found.' }));
    });
});