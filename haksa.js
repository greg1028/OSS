const fs = require('fs');

haksa = fs.readFileSync('./haksa.txt').toString('utf-8');

function schedule(text) {
  for (const i of haksa.split('\n')) {
    if (i.split(' : ')[0] === text) {
      console.log(i.split(' : ')[1]);
      return i.split(' : ')[1].slice(0, -2);
    }
  }
}

module.exports = schedule;
