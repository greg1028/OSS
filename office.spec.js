const office = require('./office');

describe('App test!', () => {
  it('addresses 검사', (done) => {
    text = office('Architectural Engineering');
    if (text === 'College of Engineering Building 1, 132') {
      done();
    } else {
      throw new Error('Test Failed');
    }
  });
});
