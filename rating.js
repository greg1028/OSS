const crawl = require('./weak_menu');

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const rating = async function (rtm, channel) {
  for (let i = 1; i < 6; i++) {
    crawl(rtm, channel, i);
    await sleep(1000);
  }
};

// rating();

module.exports = rating;
