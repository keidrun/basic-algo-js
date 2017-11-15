const getMean = array => {
  return array.reduce((total, x) => total + x) / array.length;
};

const getMedian = array => {
  array.sort((a, b) => a - b);
  return array.length % 2 !== 0
    ? array[Math.floor(array.length / 2)]
    : (array[[array.length / 2] - 1] + array[array.length / 2]) / 2;
};

const getMode = array => {
  const modeObj = array.reduce((obj, num) => {
    if (!obj[num]) obj[num] = 0;
    obj[num]++;
    return obj;
  }, {});

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];

  return modes;
};

const meanMedianMode = array => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
};

module.exports = meanMedianMode;
