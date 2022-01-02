var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let prefix = '';
  let letter = null;
  let matching = false;
  for (let i = 0; i < strs[0].length; i++) {
    letter = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) === letter) {
        matching = true;
      } else {
        return prefix;
      }
    }
    if (matching === true) {
      prefix += letter;
    } else {
      return prefix;
    }
  }
  return prefix;
};
