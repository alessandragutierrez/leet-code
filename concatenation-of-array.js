var getConcatenation = function (nums) {
  const output = [];
  for (let i = 0; output.length < nums.length * 2; i++) {
    output.push(nums[i]);
    if (i === nums.length - 1) {
      i = -1;
    }
  }
  return output;
};
