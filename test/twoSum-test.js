const expect = require('chai').expect;
const twoSum = require('../src/twoSum');

describe('twoSum-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return [[6,1],[3,4],[3,4]] for argument [1, 6, 4, 5, 3, 3] and 7', () => {
    const call = twoSum([1, 6, 4, 5, 3, 3], 7);
    expect(call.length).to.eql(3);
    expect(call[0][0]).to.eql(6);
    expect(call[0][1]).to.eql(1);
    expect(call[1][0]).to.eql(3);
    expect(call[1][1]).to.eql(4);
    expect(call[2][0]).to.eql(3);
    expect(call[2][1]).to.eql(4);
  });

  it('should return [[17,11],[-12,40]] for argument [40, 11, 19, 17, -12] and 28', () => {
    const call = twoSum([40, 11, 19, 17, -12], 28);
    expect(call.length).to.eql(2);
    expect(call[0][0]).to.eql(17);
    expect(call[0][1]).to.eql(11);
    expect(call[1][0]).to.eql(-12);
    expect(call[1][1]).to.eql(40);
  });
});
