var targetIndices = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  const output = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      output.push(i);
    }
  }
  return output;
};

// create an empty array to hold the output
// sort the nums input using bubble sort
// loop through the nums input
    // if the value at the current index is equal to the target input
        // push the current index into the output array
// return the output array from the function
