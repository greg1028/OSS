const levenshtein = require('fast-levenshtein');
const fs = require('fs');

dept = fs.readFileSync('./dept.txt').toString('utf-8');
const parse = require('./parse');

function Adress(text) {
  let rcom = 'basic';
  let distance = 999;

  for (const i of dept.split('\n')) {
    if (parse(i.split(' - ')[0]) === parse(text)) {
      console.log(i.split(' - ')[1]);
      return i.split(' - ')[1];
    }
    if (levenshtein.get(parse(text), parse(i.split(' - ')[0])) < distance) {
      rcom = i.split(' - ')[0];
      distance = levenshtein.get(parse(text), parse(i.split(' - ')[0]));
    }
  }

  for (const i of dept.split('\n')) {
    if (parse(i.split(' - ')[0]) === parse(rcom)) {
      return `${rcom}를 말씀하시는 건가요? ${i.split(' - ')[1]} 입니다.`;
    }
  }
  return '잘못된 입력입니다.';
}

console.log(Adress('acounting'));

module.exports = Adress;
