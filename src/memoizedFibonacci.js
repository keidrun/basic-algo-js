// O(n)
const memoizedFibonacci = (index, cache) => {
  let memo = cache || [];
  if (memo[index]) {
    return memo[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      memo[index] =
        memoizedFibonacci(index - 1, memo) + memoizedFibonacci(index - 2, memo);
    }
  }
  return memo[index];
};

module.exports = memoizedFibonacci;
