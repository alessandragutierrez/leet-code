var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let wordReversed = '';
    for (let j = words[i].length - 1; j > -1; j--) {
      wordReversed += words[i][j];
    }
    if (wordReversed === words[i]) {
      return wordReversed;
    }
  }
  return '';
};


// loop through the words array
    // create a variable of an empty string
    // loop through each word in the word array, in reverse
        // add each letter, starting from the end, to the empty variable
    // if the variable containing the word in reverse is equal to the normal word
        // return the word from the function
// if there is no palindromic word, return an empty string
