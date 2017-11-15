const expect = require('chai').expect;
const meanMedianMode = require('../src/meanMedianMode');

describe('meanMedianMode-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it("should return 3.25,3.5,['1', '4'] for argument [1, 2, 3, 4, 5, 4, 6, 1]", () => {
    const call = meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
    expect(call.mean).to.eql(3.25);
    expect(call.median).to.eql(3.5);
    expect(call.mode.length).to.eql(2);
    expect(call.mode[0]).to.eql('1');
    expect(call.mode[1]).to.eql('4');
  });

  it('should return 14,10,[] for argument [9, 10, 23, 10, 23, 9]', () => {
    const call = meanMedianMode([9, 10, 23, 10, 23, 9]);
    expect(call.mean).to.eql(14);
    expect(call.median).to.eql(10);
    expect(call.mode.length).to.eql(0);
  });
});
