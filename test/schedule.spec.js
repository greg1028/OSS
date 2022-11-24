const assert = require('assert');
const schedule = require('../schedule');

text1 = '10/15';
text2 = '8/22';
text3 = '12/21';
describe('schedule test!', () => {
  it("Test - Put '10/15'", (done) => {
    assert.equal(schedule(text1), "'10/15': '개교기념일',");
    done();
  });
  it("Test - Put '8/22'", (done) => {
    assert.equal(schedule(text2), "'8/22': '후기 학위수여식',");
    done();
  });
  it("Test - Put '12/21'", (done) => {
    assert.equal(schedule(text3), "'12/21': '종강',");
    done();
  });
});
