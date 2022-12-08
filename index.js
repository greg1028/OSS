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

let sch = false; // 학사 일정 상태
let offi = false; // 학과 사무실 상태

rtm.on('message', (message) => {
  const { channel } = message;
  let { text } = message;
  text = parse(text);
  console.log(message);
  console.log(text);

  if (sch) {
    if (text in scheduleinfo) {
      rtm.sendMessage(schedule(text), channel);
    } else {
      rtm.sendMessage('유효하지 않은 일정 입력입니다.');
    }
    sch = false;
  } else if (offi) {
    if (text in Info) {
      rtm.sendMessage(getAdress(text), channel);
    } else {
      rtm.sendMessage('유효하지 않은 학과 입력입니다.');
    }
    offi = false;
  }

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else if (text === '이번주뭐나와') {
    rating(rtm, channel);
  } else if (isNaN(text)) {
    switch (text) {
      case 'hi':
        rtm.sendMessage(greeting(), channel);
        break;
      case '학사일정':
        rtm.sendMessage('안내받을날짜를이야기해주세요', channel);
        break;
      case '밥':
        menu(rtm, channel);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
    }
  }
});
