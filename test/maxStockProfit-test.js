const expect = require('chai').expect;
const maxStockProfit = require('../src/maxStockProfit');

describe('maxStockProfit-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return 32 for argument [31, 46, 16, 28, 48, 44]', () => {
    expect(maxStockProfit([31, 46, 16, 28, 48, 44])).to.eql(32);
  });

  it('should return 83 for argument [4, 32, 11, 6, 28, 3, 3, 86]', () => {
    expect(maxStockProfit([4, 32, 11, 6, 28, 3, 3, 86])).to.eql(83);
  });

  it('should return 0 for argument [2, 2, 2, 2]', () => {
    expect(maxStockProfit([2, 2, 2, 2])).to.eql(0);
  });

  it('should return -1 for argument [9]', () => {
    expect(maxStockProfit([9])).to.eql(-1);
  });
});
