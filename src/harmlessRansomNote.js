// O(n+m) = O(n)
const harmlessRansomNote = (noteText, magazineText) => {
  const magazineObj = magazineText.split(' ').reduce((obj, word) => {
    !obj[word] ? (obj[word] = 1) : ++obj[word];
    return obj;
  }, {});

  const noteIsPossible = noteText.split(' ').reduce((isPossible, word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) isPossible = false;
    } else {
      isPossible = false;
    }
    return isPossible;
  }, true);

  return noteIsPossible;
};

module.exports = harmlessRansomNote;
