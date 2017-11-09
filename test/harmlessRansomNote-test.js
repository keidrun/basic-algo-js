const expect = require('chai').expect;
const harmlessRansomNote = require('../src/harmlessRansomNote');

describe('harmlessRansomNote-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should return true for argument the same sentences', () => {
    expect(harmlessRansomNote('this is a shirt', 'this is a shirt')).to.be.true;
  });

  it('should return true for argument two sentences', () => {
    expect(
      harmlessRansomNote(
        'this is a shirt',
        'it is a shirt which made of this material'
      )
    ).to.be.true;
  });

  it('should return false for argument two sentences', () => {
    expect(
      harmlessRansomNote(
        'this is a pen',
        'it is a shirt which made of this material'
      )
    ).to.be.false;
  });

  it('should return false for argument an empty and a sentence', () => {
    expect(harmlessRansomNote('', 'it is a shirt which made of this material'))
      .to.be.false;
  });

  it('should return true for argument two empty sentences', () => {
    expect(harmlessRansomNote('', '')).to.be.true;
  });

  it('should return false for argument a sentence and an empty', () => {
    expect(harmlessRansomNote('this is a pen', '')).to.be.false;
  });

  it('should throw an exception if argument is two undefineds', () => {
    const call = () => {
      harmlessRansomNote(undefined, undefined);
    };
    expect(call).to.throw(TypeError);
  });
});
