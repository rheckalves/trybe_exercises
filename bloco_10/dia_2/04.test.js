const getRepos = require('./04');
const fetch = require('node-fetch');

describe('verify if some repos exists', () => {
    it('should have `sd-01-week4-5-project-todo-list` repo', async (done) => {
        const repoURL = 'https://api.github.com/users/tryber/repos';
        const repo = 'sd-01-week4-5--todo-list';
        const result = await getRepos(repoURL);
        expect(result.some(repos => repos === repo)).toBeTruthy();
        done();
    });
    it('should have `sd-01-week4-5-project-meme-generator` repo', async (done) => {
        const repoURL = 'https://api.github.com/users/tryber/repos';
        const repo = 'sd-01-week4-5-project-meme-generator';
        const result = await getRepos(repoURL);
        expect(result.some(repos => repos === repo)).toBeTruthy();
        done();
    });
});