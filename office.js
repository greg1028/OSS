const dict = {
  'Architectural Engineering': 'College of Engineering Building 1, 132',
  'Mechanical Engineering': 'College of Engineering Building 4, 212',
  'Urban Engineering': 'College of Engineering Building 9, 917',
  'Electronic Engineering': 'College of Engineering Building 7, 224',
  'Computer Science and Engineering': 'College of Engineering Building 7, 224',
  'Chemical Engineering': 'College of Engineering Building 6, 999',
  Accounting: 'College of Commerce 2, 9999',
  'International Trade': 'College of Commerce 1, 9999',
  'Korean Language and Literature': 'College of Humanities, 320',
  'Library and Information Science': 'College of Humanities, 427',
};

function office(text) {
  console.log('주소를 찾습니다');
  console.log(text);
  return dict[text];
}

module.exports = office;

function offDict(text) {
  if (text in dict) {
    return 1;
  }
  return 0;
}

module.exports = offDict;
