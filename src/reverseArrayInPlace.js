const reverseArrayInPlace = items => {
  for (let i = 0; i < items.length / 2; i++) {
    const temp = items[i];
    items[i] = items[items.length - 1 - i];
    items[items.length - 1 - i] = temp;
  }
  return items;
};

module.exports = reverseArrayInPlace;
