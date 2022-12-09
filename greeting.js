// 한글
function randomNum(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1));
  return randNum;
}

const reply = ['Hello!', 'Bonjur!', 'Nihao!']; // 이 중에 하나로 대답

function greeting() {
  console.log('인사를 합시다.');
  const n = randomNum(0, reply.length - 1); // 0~2 난수 생성
  return reply[n];
}
module.exports = greeting;
