const expect = require('chai').expect;
const sieveOfEratosthenes = require('../src/sieveOfEratosthenes');

describe('sieveOfEratosthenes-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return [ 2, 3, 5, 7 ] for argument 10', () => {
    const call = sieveOfEratosthenes(10);
    expect(call.length).to.eql(4);
    expect(call[0]).to.eql(2);
    expect(call[1]).to.eql(3);
    expect(call[2]).to.eql(5);
    expect(call[3]).to.eql(7);
  });

  it('should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for argument 20', () => {
    const call = sieveOfEratosthenes(20);
    expect(call.length).to.eql(8);
    expect(call[0]).to.eql(2);
    expect(call[1]).to.eql(3);
    expect(call[2]).to.eql(5);
    expect(call[3]).to.eql(7);
    expect(call[4]).to.eql(11);
    expect(call[5]).to.eql(13);
    expect(call[6]).to.eql(17);
    expect(call[7]).to.eql(19);
  });
});
