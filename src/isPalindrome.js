const isPalindrome = string => {
  const chars = string.toLowerCase().split('');
  const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const letters = chars.filter(char => validChars.indexOf(char) > -1);

  return letters.join('') === letters.reverse().join('') ? true : false;
};

module.exports = isPalindrome;
