function randomNum(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1));
  return randNum;
}

const reply = ['Hello!', 'Bongjur!', 'Nihao!'];

function greeting(rtm, channel) {
  console.log('인사를 합시다.');
  const n = randomNum(0, 2);
  console.log(`n값 : ${n}`);
  rtm.sendMessage(reply[n], channel);
}

module.exports = greeting;
