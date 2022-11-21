const office = require('./office');

const offarr = [
  'College of Engineering Building 1, 132',
  'College of Engineering Building 4, 212',
  'College of Engineering Building 9, 917',
  'College of Engineering Building 7, 224',
  'College of Engineering Building 7, 224',
  'College of Engineering Building 6, 999',
  'College of Commerce 2, 9999',
  'College of Commerce 1, 9999',
  'College of Humanities, 320',
  'College of Humanities, 427',
];

describe('App test!', () => {
  it('addresses 검사', (done) => {
    text1 = 'Architectural Engineering';
    if (office.office(text1) in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }

    text2 = 'Korean Language and Literature';
    if (office.office(text2) in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }

    text3 = 'Library and Information Science';
    if (office.office(text3) in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }
  });
});
