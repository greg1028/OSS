const Info = require('./officeInfo');
const parse = require('./parse');

function getAdress(text) {
  const parsed = parse(text);
  return Info[parsed];
}

module.exports = getAdress;
