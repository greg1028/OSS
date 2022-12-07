const crawl = require('./weak_menu');

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const rating = async () => {
  for (let i = 1; i < 6; i++) {
    crawl(i);
    await sleep(1000);
  }
};

// rating();

module.exports = rating;
