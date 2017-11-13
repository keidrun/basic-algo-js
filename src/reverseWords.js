const reverseWords = string => {
  return string
    .split(' ')
    .map(word => {
      return word.split('').reduce((reversed, char) => char + reversed);
    })
    .reduce((reversed, word) => word + ' ' + reversed);
};

module.exports = reverseWords;
