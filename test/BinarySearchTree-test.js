const expect = require('chai').expect;
const BinarySearchTree = require('../src/BinarySearchTree');

const prepareBST = () => {
  let bst = new BinarySearchTree(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);
  return bst;
};

describe('BinarySearchTree-test', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true;
  });

  it('should be prepared as BST', () => {
    const bst = prepareBST();
    expect(bst.left.left.left.value).to.eql(10);
    expect(bst.left.left.value).to.eql(20);
    expect(bst.left.value).to.eql(30);
    expect(bst.left.right.value).to.eql(45);
    expect(bst.left.right.left.value).to.eql(35);
    expect(bst.value).to.eql(50);
    expect(bst.right.value).to.eql(70);
    expect(bst.right.left.value).to.eql(60);
    expect(bst.right.left.left.value).to.eql(59);
    expect(bst.right.right.value).to.eql(100);
    expect(bst.right.right.left.value).to.eql(85);
    expect(bst.right.right.right.value).to.eql(105);
  });

  it('should contain each vaule in BST', () => {
    const bst = prepareBST();
    expect(bst.contains(10)).to.be.true;
    expect(bst.contains(20)).to.be.true;
    expect(bst.contains(30)).to.be.true;
    expect(bst.contains(35)).to.be.true;
    expect(bst.contains(45)).to.be.true;
    expect(bst.contains(50)).to.be.true;
    expect(bst.contains(59)).to.be.true;
    expect(bst.contains(60)).to.be.true;
    expect(bst.contains(70)).to.be.true;
    expect(bst.contains(85)).to.be.true;
    expect(bst.contains(100)).to.be.true;
    expect(bst.contains(105)).to.be.true;
    expect(bst.contains(0)).to.be.false;
    expect(bst.contains(-100)).to.be.false;
  });

  it('should be in order with a depth first traversal in BST', () => {
    const bst = prepareBST();
    let array = [];
    const func = value => {
      array.push(value);
    };
    bst.depthFirstTraversal(func, 'in-order');

    expect(array[0]).to.eql(10);
    expect(array[1]).to.eql(20);
    expect(array[2]).to.eql(30);
    expect(array[3]).to.eql(35);
    expect(array[4]).to.eql(45);
    expect(array[5]).to.eql(50);
    expect(array[6]).to.eql(59);
    expect(array[7]).to.eql(60);
    expect(array[8]).to.eql(70);
    expect(array[9]).to.eql(85);
    expect(array[10]).to.eql(100);
    expect(array[11]).to.eql(105);
  });

  it('should be pre order with a depth first traversal in BST', () => {
    const bst = prepareBST();
    let array = [];
    const func = value => {
      array.push(value);
    };
    bst.depthFirstTraversal(func, 'pre-order');

    expect(array[0]).to.eql(50);
    expect(array[1]).to.eql(30);
    expect(array[2]).to.eql(20);
    expect(array[3]).to.eql(10);
    expect(array[4]).to.eql(45);
    expect(array[5]).to.eql(35);
    expect(array[6]).to.eql(70);
    expect(array[7]).to.eql(60);
    expect(array[8]).to.eql(59);
    expect(array[9]).to.eql(100);
    expect(array[10]).to.eql(85);
    expect(array[11]).to.eql(105);
  });

  it('should be post order with a depth first traversal in BST', () => {
    const bst = prepareBST();
    let array = [];
    const func = value => {
      array.push(value);
    };
    bst.depthFirstTraversal(func, 'post-order');

    expect(array[0]).to.eql(10);
    expect(array[1]).to.eql(20);
    expect(array[2]).to.eql(35);
    expect(array[3]).to.eql(45);
    expect(array[4]).to.eql(30);
    expect(array[5]).to.eql(59);
    expect(array[6]).to.eql(60);
    expect(array[7]).to.eql(85);
    expect(array[8]).to.eql(105);
    expect(array[9]).to.eql(100);
    expect(array[10]).to.eql(70);
    expect(array[11]).to.eql(50);
  });

  it('should be correct node with a breadth first traversal in BST', () => {
    const bst = prepareBST();
    let array = [];
    const func = node => {
      array.push(node.value);
    };
    bst.breathFirstTraversal(func);

    expect(array[0]).to.eql(50);
    expect(array[1]).to.eql(30);
    expect(array[2]).to.eql(70);
    expect(array[3]).to.eql(20);
    expect(array[4]).to.eql(45);
    expect(array[5]).to.eql(60);
    expect(array[6]).to.eql(100);
    expect(array[7]).to.eql(10);
    expect(array[8]).to.eql(35);
    expect(array[9]).to.eql(59);
    expect(array[10]).to.eql(85);
    expect(array[11]).to.eql(105);
  });

  it('should get min value in BST', () => {
    const bst = prepareBST();
    expect(bst.getMinValue()).to.eql(10);
  });

  it('should get max value in BST', () => {
    const bst = prepareBST();
    expect(bst.getMaxValue()).to.eql(105);
  });
});
