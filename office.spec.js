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
    text1 = office.office('Architectural Engineering');
    if (text1 in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }

    text2 = office.office('Korean Language and Literature');
    if (text2 in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }

    text3 = office.office('Library and Information Science');
    if (text3 in offarr) {
      done();
    } else {
      throw new Error('Test Failed');
    }
  });
});
