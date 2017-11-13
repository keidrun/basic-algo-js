const caesarCipher = (str, num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const size = alphabet.length;
  const shiftNum = num % size;

  const answer = str
    .split('')
    .map(char => {
      let index = alphabet.indexOf(char.toLowerCase()) + shiftNum;
      if (char === ' ') return char;
      if (index >= size) index -= size;
      if (index < 0) index += size;
      return char === char.toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
    })
    .join('');

  return answer;
};

module.exports = caesarCipher;
