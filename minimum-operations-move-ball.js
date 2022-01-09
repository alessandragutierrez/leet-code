var minOperations = function (boxes) {
  const output = [];
  let count = 0;
  let difference = 0;
  const boxesString = boxes.toString();
  for (let i = 0; i < boxesString.length; i++) {
    if (i !== 0) {
      output.push(count);
    }
    count = 0;
    for (let j = 0; j < boxesString.length; j++) {
      if (i === j) {
        j++;
      }
      if (j === boxesString.length) {
        break;
      }
      const jInteger = parseInt(boxesString[j]);
      if (jInteger !== 0) {
        if (j > i) {
          difference = j - i;
          count += difference;
        } else if (i > j) {
          difference = i - j;
          count += difference;
        }
      }
    }
  }
  output.push(count);
  return output;
};
