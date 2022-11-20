const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;

try {
  token = fs.readFileSync('./hide/token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const dict = {
  'Architectural Engineering': 'College of Engineering Building 1, 132',
  'Mechanical Engineering': 'College of Engineering Building 4, 212',
  'Urban Engineering': 'College of Engineering Building 9, 917',
  'Electronic Engineering': 'College of Engineering Building 7, 224',
  'Computer Science and Engineering': 'College of Engineering Building 7, 224',
  'Chemical Engineering': 'College of Engineering Building 6, 999',
  Accounting: 'College of Commerce 2, 9999',
  'International Trade': 'College of Commerce 1, 9999',
  'Korean Language and Literature': 'College of Humanities, 320',
  'Library and Information Science': 'College of Humanities, 427',
};

token = token.replace(/\n/g, '');

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting');
const square = require('./square');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (text in dict) {
    console.log(dict[text]);
  } else if (isNaN(text)) {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
    }
  }
});
