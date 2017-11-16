const mergeSort = array => {
  if (array.length < 2) return array;

  const middleIndex = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const merge = (array1, array2) => {
  let result = [];

  while (array1.length && array2.length) {
    let minNum;
    if (array1[0] < array2[0]) {
      minNum = array1.shift();
    } else {
      minNum = array2.shift();
    }
    result.push(minNum);
  }

  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }

  return result;
};

module.exports = mergeSort;
