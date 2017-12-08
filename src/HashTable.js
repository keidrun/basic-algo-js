class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    const bucket = total % this.numBuckets;
    return bucket;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    } else {
      let currentNode = this.buckets[index];
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    } else {
      let currentNode = this.buckets[index];
      while (currentNode) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  retrieveAll() {
    let allNodes = [];
    for (let i = 0; i < this.numBuckets; i++) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
    }
    return allNodes;
  }
}

const hashTable = new HashTable(50);
hashTable.insert('Keid', 'keid@example.com');
hashTable.insert('Jobs', 'jobs@example.com');
hashTable.insert('Dike', 'dike@example.com');
hashTable.insert('Pokemon', 'pokemon@example.com');
hashTable.insert('Keid', 'king@example.com');
hashTable.insert('Pokemon', 'pikatyu@example.com');
const call = hashTable.retrieveAll();
console.log(call[0].key);

module.exports = HashTable;
