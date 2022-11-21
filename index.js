const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;

try {
  token = fs.readFileSync('./hide/token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

token = token.replace(/\n/g, '');

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting');
const square = require('./square');
const office = require('./office');
const offDict = require('./office');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (offDict(text)) {
    rtm.sendMessage(office(text), channel);
  } else if (isNaN(text)) {
    switch (text) {
      case 'hi':
        rtm.sendMessage(greeting(), channel);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
    }
  }
});
