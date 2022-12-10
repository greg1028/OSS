const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;

try {
  token = fs.readFileSync('./hide/token').toString('utf-8');
} catch (err) {
  console.error(err);
}

token = token.replace(/\n/g, '');

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting');
const square = require('./square');
const getAdress = require('./dept');
const schedule = require('./haksa');
const menu = require('./menu');
const rating = require('./rating');
const parse = require('./parse');

// 1 학사일정, 2 학과안내
let flag = 0;

// 테스트 봇 ID
const testID = 'U04BAUA4KQW';

rtm.on('message', (message) => {
  const { channel } = message;
  let { text } = message;
  text = parse(text);
  if (flag === 0) { // 기본
    if (!isNaN(text)) {
      square(rtm, text, channel);
    } else if (text === '학과사무실안내') {
      rtm.sendMessage('학과 이름을 입력해주세요', channel);
      flag = 1;
    } else if (text === '이번주뭐나와') {
      rating(rtm, channel);
    } else if (text === '학사일정') {
      rtm.sendMessage('안내받을 날짜를 이야기해주세요 ex)8/4', channel);
      flag = 2;
    } else if (text === '밥') {
      menu(rtm, channel);
    } else if (text === 'hi') {
      if (message.user === testID) {
        for (let i = 0; i < 10; i++) {
          rtm.sendMessage(greeting(), channel);
        }
      } else {
        rtm.sendMessage(greeting(), channel);
      }
    } else {
      rtm.sendMessage('명령어\n1. 학사일정\n2. 학과사무실안내\n3. 밥\n4. 이번주뭐나와', channel);
    }
  } else if (flag === 1) { // 학과사무실
    rtm.sendMessage(getAdress(text), channel);
    console.log(text);
    flag = 0;
  } else if (flag === 2) { // 학사일정
    rtm.sendMessage(schedule(text), channel);
    console.log(text);
    flag = 0;
  }
});
