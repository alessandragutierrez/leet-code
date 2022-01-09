var balancedStringSplit = function (s) {
  let output = 0;
  let RCount = 0;
  let LCount = 0;
  for (let i = 0; i < s.length + 1; i++) {
    if (RCount !== 0 && LCount !== 0 && RCount === LCount) {
      output++;
      RCount = 0;
      LCount = 0;
      i--;
    } else if (s[i] === 'R') {
      RCount++;
    } else if (s[i] === 'L') {
      LCount++;
    }
  }
  return output;
};
