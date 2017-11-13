const expect = require('chai').expect;
const isPalindrome = require('../src/isPalindrome');

describe('isPalindrome-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it("should return true for argument 'Madam I'm Adam.'", () => {
    expect(isPalindrome("Madam I'm Adam")).to.be.true;
  });

  it("should return true for argument 'Borrow or rob?'", () => {
    expect(isPalindrome('Borrow or rob?')).to.be.true;
  });

  it("should return true for argument 'No lemon, No melon'", () => {
    expect(isPalindrome('No lemon, No melon')).to.be.true;
  });

  it("should return false for argument 'This is a cup of coffee.'", () => {
    expect(isPalindrome('This is a cup of coffee.')).to.be.false;
  });
});
