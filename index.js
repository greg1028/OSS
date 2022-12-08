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
// const getAdress = require('./office');
const schedule = require('./schedule');
const menu = require('./menu');
const rating = require('./rating');
// const parse = require('./parse');

flag = 0; // 0 : 기본, 1 : 학과사무실안내
rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;
  // const parsed = parse(text);
  console.log(channel);
  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (text === '학과 사무실 안내') {
    rtm.sendMessage('학과 이름을 입력해주세요', channel);

    rtm.on('message', (message) => {
      const { channel } = message;
      const { text } = message;
      rtm.sendMessage('asdadasdasd', channel); // getAdress(text)
      console.log(text);
    });
  } else if (text === '학사일정') {
    rtm.sendMessage(schedule(text), channel);
  } else if (text === '이번주 뭐나와') {
    rating(rtm, channel);
  } else if (isNaN(text)) {
    switch (text) {
      case 'hi':
        rtm.sendMessage(greeting(), channel);
        break;
      case '학사일정':
        rtm.sendMessage('안내받을 날짜를 이야기해주세요', channel);
        break;
      case '밥':
        menu(rtm, channel);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
    }
  }
});
