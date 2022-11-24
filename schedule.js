/* eslint-disable no-restricted-syntax */
const fs = require('fs');

function schedule(text) {
  const date = fs.readFileSync('haksa.js').toString().split('\n');
  for (i in date) {
    if (date[i].includes(text)) {
      return date[i];
    }
  }
}
module.exports = schedule;
