const expect = require('chai').expect;
const reverseArrayInPlace = require('../src/reverseArrayInPlace');

describe('reverseArrayInPlace-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return [1, 2, 3, 4, 5] for argument [5, 4, 3, 2, 1]', () => {
    const call = reverseArrayInPlace([1, 2, 3, 4, 5]);
    expect(call.length).to.eql(5);
    expect(call[0]).to.eql(5);
    expect(call[1]).to.eql(4);
    expect(call[2]).to.eql(3);
    expect(call[3]).to.eql(2);
    expect(call[4]).to.eql(1);
  });

  it('should return [1, 2, 3, 4, 5, 6] for argument [6, 5, 4, 3, 2, 1]', () => {
    const call = reverseArrayInPlace([1, 2, 3, 4, 5, 6]);
    expect(call.length).to.eql(6);
    expect(call[0]).to.eql(6);
    expect(call[1]).to.eql(5);
    expect(call[2]).to.eql(4);
    expect(call[3]).to.eql(3);
    expect(call[4]).to.eql(2);
    expect(call[5]).to.eql(1);
  });

  it('should return [a, i, u, e, o] for argument [o, e, u, i, a]', () => {
    const call = reverseArrayInPlace(['a', 'i', 'u', 'e', 'o']);
    expect(call.length).to.eql(5);
    expect(call[0]).to.eql('o');
    expect(call[1]).to.eql('e');
    expect(call[2]).to.eql('u');
    expect(call[3]).to.eql('i');
    expect(call[4]).to.eql('a');
  });
});
