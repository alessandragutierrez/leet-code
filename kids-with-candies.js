var kidsWithCandies = function (candies, extraCandies) {
  let greatestNumber = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > greatestNumber) {
      greatestNumber = candies[i];
    }
  }
  let resultsArray = [];
  for (i = 0; i < candies.length; i++) {
    let candyCount = candies[i] + extraCandies;
    if (candyCount >= greatestNumber) {
      resultsArray.push(true);
    } else {
      resultsArray.push(false);
    }
  }
  return resultsArray;
};
