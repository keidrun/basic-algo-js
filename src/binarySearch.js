// O(log n) after sorted
const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElement = numArray[middleIndex];

  if (middleElement === key) {
    return true;
  } else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
};

module.exports = binarySearch;
