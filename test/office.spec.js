const getAdress = require('../office');

text1 = 'Architectural Engineering';
text2 = 'Korean Language and Literature';
text3 = 'Library and Information Science';

describe('office test!', () => {
  it("Test - Put 'Architectural Engineering'", (done) => {
    assert.equal(getAdress(text1), 'College of Engineering Building 1, 132');
    done();
  });
  it("Test - Put 'Korean Language and Literature'", (done) => {
    assert.equal(getAdress(text2), 'College of Humanities, 320');
    done();
  });
  it("Test - Put 'Architectural Engineering'", (done) => {
    assert.equal(getAdress(text3), 'College of Humanities, 427');
    done();
  });
});
