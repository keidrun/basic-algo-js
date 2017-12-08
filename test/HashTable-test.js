const expect = require('chai').expect;
const HashTable = require('../src/HashTable');

describe('HashTable-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should insert a value', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    expect(hashTable.get('Keid')).to.eql('keid@example.com');
  });

  it('should insert two value', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Jobs', 'jobs@example.com');
    expect(hashTable.get('Keid')).to.eql('keid@example.com');
    expect(hashTable.get('Jobs')).to.eql('jobs@example.com');
  });

  it('should insert two value which have the same hash', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Dike', 'dike@example.com');
    expect(hashTable.get('Keid')).to.eql('keid@example.com');
    expect(hashTable.get('Dike')).to.eql('dike@example.com');
  });

  it('should insert some value', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Jobs', 'jobs@example.com');
    hashTable.insert('Dike', 'dike@example.com');
    hashTable.insert('Pokemon', 'pokemon@example.com');
    expect(hashTable.get('Keid')).to.eql('keid@example.com');
    expect(hashTable.get('Jobs')).to.eql('jobs@example.com');
    expect(hashTable.get('Dike')).to.eql('dike@example.com');
    expect(hashTable.get('Pokemon')).to.eql('pokemon@example.com');
  });

  it('should update a value', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Jobs', 'jobs@example.com');
    hashTable.insert('Dike', 'dike@example.com');
    hashTable.insert('Pokemon', 'pokemon@example.com');
    hashTable.insert('Keid', 'king@example.com');
    expect(hashTable.get('Jobs')).to.eql('jobs@example.com');
    expect(hashTable.get('Dike')).to.eql('dike@example.com');
    expect(hashTable.get('Pokemon')).to.eql('pokemon@example.com');
    expect(hashTable.get('Keid')).to.eql('king@example.com');
  });

  it('should update some value', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Jobs', 'jobs@example.com');
    hashTable.insert('Dike', 'dike@example.com');
    hashTable.insert('Pokemon', 'pokemon@example.com');
    hashTable.insert('Keid', 'king@example.com');
    hashTable.insert('Pokemon', 'pikatyu@example.com');
    expect(hashTable.get('Jobs')).to.eql('jobs@example.com');
    expect(hashTable.get('Dike')).to.eql('dike@example.com');
    expect(hashTable.get('Keid')).to.eql('king@example.com');
    expect(hashTable.get('Pokemon')).to.eql('pikatyu@example.com');
  });

  it('should retrive all values', () => {
    const hashTable = new HashTable(50);
    hashTable.insert('Keid', 'keid@example.com');
    hashTable.insert('Jobs', 'jobs@example.com');
    hashTable.insert('Dike', 'dike@example.com');
    hashTable.insert('Pokemon', 'pokemon@example.com');
    hashTable.insert('Keid', 'king@example.com');
    hashTable.insert('Pokemon', 'pikatyu@example.com');
    const call = hashTable.retrieveAll();
    expect(call.length).to.eql(4);
    expect(call[0].key).to.eql('Pokemon');
    expect(call[0].value).to.eql('pikatyu@example.com');
    expect(call[1].key).to.eql('Keid');
    expect(call[1].value).to.eql('king@example.com');
    expect(call[2].key).to.eql('Dike');
    expect(call[2].value).to.eql('dike@example.com');
    expect(call[3].key).to.eql('Jobs');
    expect(call[3].value).to.eql('jobs@example.com');
  });
});
