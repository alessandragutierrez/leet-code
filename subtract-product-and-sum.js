var subtractProductAndSum = function (n) {
  const nString = n.toString();
  const firstDigit = parseInt(nString[0]);
  let product = firstDigit;
  let sum = firstDigit;
  for (let i = 1; i < nString.length; i++) {
    product = product * parseInt(nString[i]);
    sum = sum + parseInt(nString[i]);
  }
  let difference = 0;
  difference = product - sum;
  return difference;
};
