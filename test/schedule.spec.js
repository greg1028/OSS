const schedule = require('../schedule');

text1 = '10/15';
text2 = '8/22';
text3 = '12/21';
describe('schedule test!', () => {
  it("Test - Put '10/15'", (done) => {
    if (schedule(text1) !== "'10/15': '개교기념일',") {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }
    if (schedule(text2) !== "'8/22': '후기 학위수여식',") {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }

    if (schedule(text3) !== "'12/21': '종강',") {
      throw new Error(`Test Failed, Can't reply '${text}'`);
    }
    done();
  });
});
