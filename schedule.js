const scheduleInfo = require('./haksa');

function schedule(text) {
  str = `${text}�� ${scheduleInfo[text]}�Դϴ�.`;
  return str;
}
module.exports = schedule;
