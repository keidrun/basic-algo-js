const expect = require('chai').expect;
const bubbleSort = require('../src/bubbleSort');

describe('bubbleSort-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return [1, 2, 3, 4, 5]] for argument [5, 4, 3, 2, 1]', () => {
    const call = bubbleSort([5, 4, 3, 2, 1]);
    expect(call.length).to.eql(5);
    expect(call[0]).to.eql(1);
    expect(call[1]).to.eql(2);
    expect(call[2]).to.eql(3);
    expect(call[3]).to.eql(4);
    expect(call[4]).to.eql(5);
  });

  it('should return [1, 2, 3, 4, 5, 8]] for argument [5, 3, 8, 2, 1, 4]', () => {
    const call = bubbleSort([5, 3, 8, 2, 1, 4]);
    expect(call.length).to.eql(6);
    expect(call[0]).to.eql(1);
    expect(call[1]).to.eql(2);
    expect(call[2]).to.eql(3);
    expect(call[3]).to.eql(4);
    expect(call[4]).to.eql(5);
    expect(call[5]).to.eql(8);
  });

  it('should return [-5, -4, -3, -1, 2, 8]] for argument [-5, -3, 8, 2, -1, -4]', () => {
    const call = bubbleSort([-5, -3, 8, 2, -1, -4]);
    expect(call.length).to.eql(6);
    expect(call[0]).to.eql(-5);
    expect(call[1]).to.eql(-4);
    expect(call[2]).to.eql(-3);
    expect(call[3]).to.eql(-1);
    expect(call[4]).to.eql(2);
    expect(call[5]).to.eql(8);
  });

  it('should return [0 , 19, 19, 33, 33, 52]] for argument [33, 33, 52, 0, 19, 19]', () => {
    const call = bubbleSort([33, 33, 52, 0, 19, 19]);
    expect(call.length).to.eql(6);
    expect(call[0]).to.eql(0);
    expect(call[1]).to.eql(19);
    expect(call[2]).to.eql(19);
    expect(call[3]).to.eql(33);
    expect(call[4]).to.eql(33);
    expect(call[5]).to.eql(52);
  });
});
