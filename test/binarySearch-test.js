const expect = require('chai').expect;
const binarySearch = require('../src/binarySearch');

describe('binarySearch-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return true for argument [0, 1, 6, 14, 32, 33, 51, 86, 98] and 14', () => {
    expect(binarySearch([0, 1, 6, 14, 32, 33, 51, 86, 98], 14)).to.eql(true);
  });

  it('should return true for argument [0, 1, 6, 14, 32, 33, 51, 86, 98] and 98', () => {
    expect(binarySearch([0, 1, 6, 14, 32, 33, 51, 86, 98], 98)).to.eql(true);
  });

  it('should return true for argument [0, 1, 6, 14, 32, 33, 51, 86, 98] and 86', () => {
    expect(binarySearch([0, 1, 6, 14, 32, 33, 51, 86, 98], 86)).to.eql(true);
  });

  it('should return true for argument [0, 1, 6, 14, 32, 33, 51, 86, 98] and 7', () => {
    expect(binarySearch([0, 1, 6, 14, 32, 33, 51, 86, 98], 7)).to.eql(false);
  });

  it('should return true for argument [0,2, 3, 7, 9, 10, 23, 44] and 3', () => {
    expect(binarySearch([0, 2, 3, 7, 9, 10, 23, 44], 3)).to.eql(true);
  });

  it('should return true for argument [0,2, 3, 7, 9, 10, 23, 44] and 0', () => {
    expect(binarySearch([0, 2, 3, 7, 9, 10, 23, 44], 0)).to.eql(true);
  });

  it('should return true for argument [0,2, 3, 7, 9, 10, 23, 44] and 7', () => {
    expect(binarySearch([0, 2, 3, 7, 9, 10, 23, 44], 7)).to.eql(true);
  });

  it('should return true for argument [0,2, 3, 7, 9, 10, 23, 44] and 2', () => {
    expect(binarySearch([0, 2, 3, 7, 9, 10, 23, 44], 2)).to.eql(true);
  });

  it('should return false for argument [0,2, 3, 7, 9, 10, 23, 44] and -1', () => {
    expect(binarySearch([0, 2, 3, 7, 9, 10, 23, 44], -1)).to.eql(false);
  });
});
