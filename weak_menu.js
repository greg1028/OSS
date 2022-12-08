const axios = require('axios');
const cheerio = require('cheerio');

const day = ['', '월요일', '화요일', '수요일', '목요일',
  '금요일'];
const badMenu = ['깻잎', '샐러드', '야채', '나물', '무침'];
const goodMenu = ['고기', '구이', '닭', '갈비', '돈까스'];
const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
let score = 2;
let dayScore = '';
// let txt = '';

async function webScraping(Url, selector) {
  const res = [];
  const html = await axios.get(Url);
  const $ = cheerio.load(html.data);

  // eslint-disable-next-line no-restricted-syntax
  for (const v of $(selector)) {
    res.push($(v).text());
  }

  return res;
}

function crawl(rtm, channel, z) {
  const selector = `#contents > div.contentsArea.WeekMenu > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${z + 2}) > ul > li `;
  webScraping(url, selector).then((res) => {
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== '') {
        // txt += `${res[i]}, `;

        // rating
        for (const item of goodMenu) {
          if (res[i].includes(item)) {
            score++;
          }
        }

        for (const item of badMenu) {
          if (res[i].includes(item)) {
            score--;
          }
        }
      }
    }

    // adjusting
    if (score < 2) {
      score = 1;
    } else if (score > 2) {
      score = 3;
    }

    // print
    // console.log(day[z]);

    // txt += '입니다.';
    // console.log(txt);

    star = '★'.repeat(score);
    // console.log(star);
    dayScore = day[z] + star;
    rtm.sendMessage(dayScore, channel);

    // reset menu, score
    // txt = '';
    score = 2;
    console.log(dayScore);
  });

  // return dayScore;
}

module.exports = crawl;
