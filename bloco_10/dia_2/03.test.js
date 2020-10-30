const getUserName = require('./03');

describe('verify if getUserName return an user name or an error', () => {
    it('should return an user name when receive an existing ID', async (done) => {
        const result = await getUserName(4);
        expect(result).toEqual('Mark');
        done();
    });

    it('should retun an error when receive an inexisting ID', async (done) => {
        try {
            await getUserName(2);
        } catch(error) {
            expect(error).toEqual({ error: 'User with 2 not found.' });
            done();
        }
    });
});