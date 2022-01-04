var maximumWealth = function (accounts) {
  let wealthResult = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealthCount = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealthCount += accounts[i][j];
    }
    if (wealthCount > wealthResult) {
      wealthResult = wealthCount;
    }
  }
  return wealthResult;
};
