var checkIfPangram = function (sentence) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65 + 32);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  if (sentence.length < 26) {
    return false;
  }
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (sentence[i] === alphabet[j]) {
        alphabet.splice(j, 1)
      }
    }
  }
  if (alphabet.length === 0) {
    return true;
  } else return false;
};

// automate an array that contains the lowercase alphabet
// if the length of the sentence input is less than 26
    // return false
// loop through the sentence input
    // loop through the alphabet array
        // if the current character in the sentence is equal to the current character in the                  alphabet
            // remove the character the the alphabet array
// if the length of the alphabet array is equal to 0
    // return true
// else return false
