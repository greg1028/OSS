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
const schedule = require('./schedule');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (text == '학사일정') {
    rtm.sendMessage('안내 받을 날짜를 이야기해주세요', channel);
  } else if (isNaN(text)) {
    square(rtm, text, channel);
  } else { rtm.sendMessage('ERROR2', channel); }
});
