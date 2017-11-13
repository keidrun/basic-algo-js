const expect = require('chai').expect;
const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it("should return 'Bqq Mggrgt' for argument 'Zoo Keeper' and 2", () => {
    expect(caesarCipher('Zoo Keeper', 2)).to.eql('Bqq Mggrgt');
  });

  it("should return 'Lsq Mkb' for argument 'Big Car' and -16", () => {
    expect(caesarCipher('Big Car', -16)).to.eql('Lsq Mkb');
  });

  it("should return 'Tkfkcmbszd' for argument 'Zoo Keeper' and -900", () => {
    expect(caesarCipher('Javascript', -900)).to.eql('Tkfkcmbszd');
  });
});
