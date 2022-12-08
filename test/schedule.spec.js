const assert = require('assert');
const schedule = require('../schedule');

const text1 = '10/15';
const text2 = '8/22';
const text3 = '12/21';

describe('schedule test!', () => {
  it("Test - Put '10/15'", (done) => {
    assert.equal(schedule(text1), '10/15�� ����������Դϴ�.');
    done();
  });
  it("Test - Put '8/22'", (done) => {
    assert.equal(schedule(text2), '8/22�� �ı� �����������Դϴ�.');
    done();
  });
  it("Test - Put '12/21'", (done) => {
    assert.equal(schedule(text3), '12/21�� �����Դϴ�.');
    done();
  });
});
