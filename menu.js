const axios = require('axios');
const cheerio = require('cheerio');

async function webScraping(url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  // eslint-disable-next-line no-restricted-syntax
  for (const v of $(selector)) {
    res.push($(v).text());
  }

  return res;
}

const day = ['일요일', '월요일', '화요일', '수요일', '목요일',
  '금요일', '토요일'];

const d = new Date().getDay();
console.log(`${day[d]} 메뉴`);

const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const selector = `#contents > div.contentsArea.WeekMenu > div:nth-child(229) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${d + 2}) > ul > li`;

function menu(rtm, channel) {
  if (d === 6 || d === 0) { // 주말이면
    rtm.sendMessage('주말은 쉽니다.', channel);
    console.log('주말은 쉽니다.');
  } else {
    webScraping(url, selector).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i] !== '') {
          rtm.sendMessage(res[i], channel);
        }
      }
    });
  }
}

module.exports = menu;
