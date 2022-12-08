const scheduleInfo = require('./haksa');

function schedule(text) {
  str = `${text}는 ${scheduleInfo[text]}입니다.`;
  return str;
}
module.exports = schedule;

