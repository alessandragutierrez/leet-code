var shuffle = function (nums, n) {
  let shuffleOutput = [];
  for (var i = 0; i < nums.length - n; i++) {
    shuffleOutput.push(nums[i], nums[i + n]);
  }
  return shuffleOutput;
};
