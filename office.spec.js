const getAdress = require('./office');

text1 = 'Architectural Engineering';
text2 = 'Korean Language and Literature';
text3 = 'Library and Information Science';

describe('App test!', () => {
  it('addresses 검사', (done) => {
    if (getAdress(text1) !== 'College of Engineering Building 1, 132') {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }
    if (getAdress(text2) !== 'College of Humanities, 320') {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }

    if (getAdress(text3) !== 'College of Humanities, 427') {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }
    done();
  });
});
