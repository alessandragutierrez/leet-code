var sortSentence = function (s) {
  let spaces = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      spaces++;
    }
  }

  const arr = [];
  for (i = 0; i < spaces + 1; i++) {
    arr.push(' ');
  }


  let word = '';
  for (i = 0; i < s.length; i++) {
    if ((i + 2) === s.length) {
      word += s[i];
      arr.splice(s[i + 1] - 1, 1, word);
      word = '';
    } else if (s[i + 2] === ' ') {
      word += s[i];
      arr.splice(s[i + 1] - 1, 1, word);
      word = '';
      i += 2;
    } else {
      word += s[i];
    }
  }

  let output = '';
  for (i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      output += arr[i];
    } else {
      output += (arr[i] + ' ');
    }
  }

  return output;
};
