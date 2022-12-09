const assert = require('assert');
const schedule = require('../haksa');

const text1 = '10/15';
const text2 = '8/22';
const text3 = '12/21';

describe('schedule test!', () => {
  it("Test - Put '10/15'", (done) => {
    assert.equal(schedule(text1).replace(/\r/g, ''), '개교기념일');
    done();
  });
  it("Test - Put '8/22'", (done) => {
    assert.equal(schedule(text2).replace(/\r/g, ''), '후기 학위수여식');
    done();
  });
  it("Test - Put '12/21'", (done) => {
    assert.equal(schedule(text3).replace(/\r/g, ''), '종강');
    done();
  });
});
