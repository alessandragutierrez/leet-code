var mostWordsFound = function (sentences) {
  let maximumNumber = 0;
  for (let i = 0; i < sentences.length; i++) {
    let count = 1;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i].charAt(j) === ' ') {
        count++;
      }
    }
    if (count > maximumNumber) {
      maximumNumber = count;
    }
  }
  return maximumNumber;
};
