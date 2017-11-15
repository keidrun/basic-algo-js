const expect = require('chai').expect;
const memoizedFibonacci = require('../src/memoizedFibonacci');

describe('memoizedFibonacci-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return 1 for argument 1', () => {
    expect(memoizedFibonacci(1)).to.eql(1);
  });

  it('should return 1 for argument 2', () => {
    expect(memoizedFibonacci(2)).to.eql(1);
  });

  it('should return 2 for argument 3', () => {
    expect(memoizedFibonacci(3)).to.eql(2);
  });

  it('should return 3 for argument 4', () => {
    expect(memoizedFibonacci(4)).to.eql(3);
  });

  it('should return 5 for argument 5', () => {
    expect(memoizedFibonacci(5)).to.eql(5);
  });

  it('should return 8 for argument 6', () => {
    expect(memoizedFibonacci(6)).to.eql(8);
  });

  it('should return 144 for argument 12', () => {
    expect(memoizedFibonacci(12)).to.eql(144);
  });

  it('should return 6765 for argument 20', () => {
    expect(memoizedFibonacci(20)).to.eql(6765);
  });

  it('should return 12586269025 for argument 50', () => {
    expect(memoizedFibonacci(50)).to.eql(12586269025);
  });
});
