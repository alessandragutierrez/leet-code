var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      count += 1;
    } else if (s[i] === ' ' && count > 0) {
      return count;
    }
  }
  return count;
};
