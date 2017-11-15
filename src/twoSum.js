// O(n)
const twoSum = (numArray, sum) => {
  let pairs = [];
  let hashTable = [];

  numArray.forEach(num => {
    const counterPart = sum - num;
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([num, counterPart]);
    }
    hashTable.push(num);
  });

  return pairs;
};

module.exports = twoSum;
