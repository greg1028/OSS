/* eslint-disable no-restricted-syntax */
const fs = require('fs');

function schedule(rtm, text, channel) {
  const date = fs.readFileSync('haksa.js').toString().split('\n');
  for (i in date) {
    if (date[i].includes(text)) {
      rtm.sendMessage(date[i], channel);
      break;
    }
  }
}
module.exports = schedule;
