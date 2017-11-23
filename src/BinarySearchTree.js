class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BinarySearchTree(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BinarySearchTree(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);
  }

  breathFirstTraversal(iteratorFunc) {
    let queue = [this];
    while (queue.length) {
      const treeNode = queue.shift();
      iteratorFunc(treeNode);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }

  getMinValue() {
    if (this.left) return this.left.getMinValue();
    else return this.value;
  }

  getMaxValue() {
    if (this.right) return this.right.getMaxValue();
    else return this.value;
  }
}

module.exports = BinarySearchTree;
