const index = require('../index').index;

if (index) {
  console.log(index);
  if (index() === '학사일정') {
    console.log('Success');
  } else {
    console.log('Fail');
  }
}
