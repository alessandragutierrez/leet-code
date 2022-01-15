var defangIPaddr = function (address) {
  let output = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      output += '[.]';
    } else output += address[i];
  }
  return output;
};

// create a variable of an empty string to return the output
// loop through the address input
    // if the character at current index is equal to '.'
        // add '[.]' to the output variable
    // else add the character to the output variable
// return the output variable from the function
