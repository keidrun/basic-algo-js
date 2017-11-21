const expect = require('chai').expect;
const LinkedList = require('../src/LinkedList');

describe('LinkedList-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should add new Nodes for method addToHead', () => {
    const call = new LinkedList();
    call.addToHead(1);
    call.addToHead(2);
    call.addToHead('three');
    call.addToHead(4);
    call.addToHead('five');
    expect(call.head.value).to.eql('five');
    expect(call.tail.value).to.eql(1);
  });

  it('should add new Nodes for method addToTail', () => {
    const call = new LinkedList();
    call.addToTail(1);
    call.addToTail(2);
    call.addToTail('three');
    call.addToTail(4);
    call.addToTail('five');
    expect(call.head.value).to.eql(1);
    expect(call.tail.value).to.eql('five');
  });

  it('should remove a head Node for method removeHead', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(1);
    call.addToTail('three');
    call.addToTail(4);
    call.addToTail('five');
    call.removeHead();
    expect(call.head.value).to.eql(2);
    expect(call.tail.value).to.eql('five');
  });

  it('should return null for method removeHead', () => {
    const call = new LinkedList();
    expect(call.removeHead()).to.eql(null);
  });

  it('should remove a tail Node for method removeTail', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(1);
    call.addToTail('three');
    call.addToTail(4);
    call.addToTail('five');
    call.removeTail();
    expect(call.head.value).to.eql(1);
    expect(call.tail.value).to.eql(4);
  });

  it('should return null for method removeTail', () => {
    const call = new LinkedList();
    expect(call.removeTail()).to.eql(null);
  });

  it('should find the Node for method search', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(1);
    call.addToTail('three');
    call.addToTail(4);
    call.addToTail('five');
    const findedNode = call.search('three');
    expect(findedNode.value).to.eql('three');
    expect(findedNode.next.value).to.eql(4);
    expect(findedNode.prev.value).to.eql(2);
  });

  it('should return null for method search', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(1);
    call.addToTail('three');
    call.addToTail(4);
    call.addToTail('five');
    const findedNode = call.search('six');
    expect(findedNode).to.eql(null);
  });

  it('should return an array of finded Nodes for method indexesOf', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(11);
    call.addToTail('three');
    call.addToTail(11);
    call.addToTail('five');
    const arr = call.indexesOf(11);
    expect(arr.length).to.eql(2);
    expect(arr[0]).to.eql(0);
    expect(arr[1]).to.eql(3);
  });

  it('should return empty for method indexesOf', () => {
    const call = new LinkedList();
    call.addToHead(2);
    call.addToHead(11);
    call.addToTail('three');
    call.addToTail(11);
    call.addToTail('five');
    const arr = call.indexesOf(100);
    expect(arr.length).to.eql(0);
  });
});
