const schedule = function (rtm, text, channel) {
  const fs = require('fs');
  const date = fs.readFileSync('haksa.js').toString().split('\n');
  for (i in date) {
    if (date[i].includes(text)) {
      rtm.sendMessage(date[i], channel);
      break;
    } else {
    }
  }
};
module.exports = schedule;
