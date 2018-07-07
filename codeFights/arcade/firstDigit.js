function firstDigit(inputString) {
  return inputString.split('').filter(char => !isNaN(parseInt(char)))[0];
}

console.log(firstDigit("var_1__Int"));