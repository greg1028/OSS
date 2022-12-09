const fs = require('fs');

dept = fs.readFileSync('./dept.txt').toString('utf-8');
const parse = require('./parse');

function Adress(text) {
  for (const i of dept.split('\n')) {
    if (parse(i.split(' - ')[0]) === parse(text)) {
      console.log(i.split(' - ')[1]);
      return i.split(' - ')[1];
    }
    // else() 글자 거리 기반
  }
}

module.exports = Adress;
