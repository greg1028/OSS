const editdistance = require('editdistance');
const fs = require('fs');

dept = fs.readFileSync('./dept.txt').toString('utf-8');
const parse = require('./parse');

answer = 'basic';
let rcom = 'basic';
distance = 999;
function Adress(text) {
  for (const i of dept.split('\n')) {
    if (parse(i.split(' - ')[0]) === parse(text)) {
      console.log(i.split(' - ')[1]);
      return i.split(' - ')[1];
    }

    if (editdistance.eval(parse(text), parse(i.split(' - ')[0])) < distance) {
      rcom = text;
      distnace = dis.eval(parse(text), parse(i.split(' - ')[0]));
    }
  }

  for (const i of dept.split('\n')) {
    if (parse(i.split(' - ')[0]) === parse(rcom)) {
      console.log(i.split(' - ')[1]);

      return `${rcom}를 말씀하시는 건가요? ${i.split(' - ')[1]} 입니다.`;
    }
  }
  return '잘못된 입력입니다.';
}

module.exports = Adress;
