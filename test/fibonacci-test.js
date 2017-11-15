const expect = require('chai').expect;
const fibonacci = require('../src/fibonacci');

describe('fibonacci-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return 1 for argument 1', () => {
    expect(fibonacci(1)).to.eql(1);
  });

  it('should return 1 for argument 2', () => {
    expect(fibonacci(2)).to.eql(1);
  });

  it('should return 2 for argument 3', () => {
    expect(fibonacci(3)).to.eql(2);
  });

  it('should return 3 for argument 4', () => {
    expect(fibonacci(4)).to.eql(3);
  });

  it('should return 5 for argument 5', () => {
    expect(fibonacci(5)).to.eql(5);
  });

  it('should return 8 for argument 6', () => {
    expect(fibonacci(6)).to.eql(8);
  });

  it('should return 144 for argument 12', () => {
    expect(fibonacci(12)).to.eql(144);
  });

  it('should return 6765 for argument 20', () => {
    expect(fibonacci(20)).to.eql(6765);
  });
});
