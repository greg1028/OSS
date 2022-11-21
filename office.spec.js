const office = require('./office');

describe('App test!', () => {
  it('addresses 검사', (done) => {
    text1 = 'Architectural Engineering';
    console.log(office.office(text1));
    if (office.office(text1) !== 'College of Engineering Building 1, 132') {
      throw new Error('Test Failed');
    }

    text2 = 'Korean Language and Literature';
    if (office.office(text2) !== 'College of Humanities, 320') {
      throw new Error('Test Failed');
    }

    text3 = 'Library and Information Science';
    if (office.office(text3) !== 'College of Humanities, 427') {
      throw new Error('Test Failed');
    }
    done();
  });
});
