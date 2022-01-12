var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let difference = 0;
      if (nums[i] > nums[j]) {
        difference = nums[i] - nums[j];
      } else if (nums[j] > nums[i]) {
        difference = nums[j] - nums[i];
      }
      if (difference === k) {
        count++;
      }
    }
  }
  return count;
};

// create a variable with a value of 0 to keep count
// loop through the nums array, let i = 0
    // loop through the nums array, let j = i + 1
        // determine the difference between i and j
        // if the difference is equal to the k input
            // increment the count
// return the count from the function
