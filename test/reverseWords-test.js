const expect = require('chai').expect;
const reverseWords = require('../src/reverseWords');

describe('reverseWords-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it("should return 'This is a pen' for argument 'nep a si sihT'", () => {
    expect(reverseWords('This is a pen')).to.eql('nep a si sihT');
  });
});
