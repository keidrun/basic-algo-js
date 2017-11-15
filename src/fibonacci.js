// O(2^n) ... very slow!
const fibonacci = position => {
  return position < 3 ? 1 : fibonacci(position - 1) + fibonacci(position - 2);
};

module.exports = fibonacci;
