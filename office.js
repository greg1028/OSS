const Info = require('./officeInfo');
const parse = require('./parse');

function getAdress(text) {
  const parsed = parse(text);
  res = '';
  res = Info[parsed];
  return res;
}

module.exports = getAdress;
