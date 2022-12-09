const fs = require('fs');

haksa = fs.readFileSync('./haksa.txt').toString('utf-8');

function schedule(text) {
  for (const i of haksa.split('\n')) {
    if (i.split(' : ')[0] === text) {
      return i.split(' : ')[1];
    }
  }
}

module.exports = schedule;
