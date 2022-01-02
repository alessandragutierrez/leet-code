var twoSum = function (nums, target) {
  const indices = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
};
