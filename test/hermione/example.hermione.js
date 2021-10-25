const { assert } = require('chai');

describe('github', async function() {
    it('Тест, который пройдет', async function() {
        await this.browser.url('https://github.com/gemini-testing/hermione');

        const title = await this.browser.$('#readme h1').getText();
        assert.equal(title, 'Hermione');
    });
});