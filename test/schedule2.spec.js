const assert = require('assert');
const schedule = require('../schedule2');

const text1 = '10/15';
const text2 = '8/22';
const text3 = '12/21';

describe('schedule test!', () => {
  it("Test - Put '10/15'", (done) => {
    assert.equal(schedule(text1), '10/15는 개교기념일입니다.');
    done();
  });
  it("Test - Put '8/22'", (done) => {
    assert.equal(schedule(text2), '8/22는 후기 학위수여식입니다.');
    done();
  });
  it("Test - Put '12/21'", (done) => {
    assert.equal(schedule(text3), '12/21는 종강입니다.');
    done();
  });
});
