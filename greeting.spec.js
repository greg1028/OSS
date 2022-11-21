const greeting = require('./greeting');

const reply = ['Hello!', 'Bongjur!', 'Nihao!'];

describe('greeting test!', () => {
  it('greeting 검사', (done) => {
    text = greeting();
    if (reply.includes(text) === true) {
      done();
    } else {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }
  });
});
