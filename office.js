const Info = require('./officeInfo');

function getAdress(text) {
  return Info[text];
}

module.exports = getAdress;
