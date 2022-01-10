var interpret = function (command) {
  let output = '';
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      output += 'G';
    } else if (command[i] === '(' && command[i + 1] === ')') {
      output += 'o';
      i++;
    } else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
      output += 'al';
      i = i + 3;
    }
  }
  return output;
};
