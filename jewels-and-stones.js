var numJewelsInStones = function (jewels, stones) {
  let jewelCount = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones.charAt(i) === jewels.charAt(j)) {
        jewelCount++;
      }
    }
  }
  return jewelCount;
};
