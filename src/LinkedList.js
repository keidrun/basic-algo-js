class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return removedValue;
  }

  removeTail() {
    if (!this.tail) return null;
    const removedValue = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return removedValue;
  }

  search(searchValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  indexesOf(value) {
    let indexes = [];
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        indexes.push(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return indexes;
  }
}

module.exports = LinkedList;
