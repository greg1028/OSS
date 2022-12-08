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
const getAdress = require('./office');
const Info = require('./officeInfo');
const schedule = require('./schedule');
const scheduleinfo = require('./haksa');
const menu = require('./menu');
const rating = require('./rating');
const parse = require('./parse');

// 1 학사일정, 2 학과안내
let flag = 0;

rtm.on('message', (message) => {
  const { channel } = message;
  let { text } = message;
  text = parse(text);
  console.log(message);
  console.log(text);

  if (flag === 1) { // 학사일정 입력 받았을 때
    if (text in scheduleinfo) {
      rtm.sendMessage(schedule(text), channel);
    } else {
      rtm.sendMessage('유효하지 않은 일정 입력입니다.', channel);
    }
    flag = 0;
  } else if (flag === 2) { // 학과안내 입력 받았을 때
    if (text in Info) {
      rtm.sendMessage(getAdress(text), channel);
    } else {
      rtm.sendMessage('유효하지 않은 학과 입력입니다.', channel);
    }
    flag = 0;
  } else if (!isNaN(text)) { // 제곱 기능
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        rtm.sendMessage(greeting(), channel);
        break;
      case '학사일정':
        rtm.sendMessage('안내받을날짜를이야기해주세요 ex) 8/4', channel);
        flag = 1;
        break;
      case '학과안내':
        rtm.sendMessage('안내받을학과사무실을이야기해주세요', channel);
        flag = 2;
        break;
      case '밥': // 오늘 메뉴
        menu(rtm, channel);
        break;
      case '이번주뭐나와': // 이번주 메뉴 평점
        rating(rtm, channel);
        break;
      default:
        rtm.sendMessage('명령어\n 1. 학사일정\n 2. 학과안내\n 3. 밥\n 4.이번주뭐나와', channel);
    }
  }
});
