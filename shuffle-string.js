var restoreString = function (s, indices) {
  let shuffledS = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (indices[j] === count) {
        shuffledS += s[j];
        count++;
      }
    }
  }
  return shuffledS;
};
