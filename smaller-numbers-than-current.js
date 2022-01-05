var smallerNumbersThanCurrent = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) {
        count++;
      }
    }
    output.push(count);
  }
  return output;
};
