function decodeString(s) {
  let regex = /(\d*)\[(\w*)\]/
  let transformingString = s;
  while(regex.test(transformingString)) {
    transformingString = transformingString.replace(regex,produceReplacementString);
  }

  // let newString = s.replace(regex,produceReplacementString);
  // let finalString = newString.replace(regex,produceReplacementString);
  return transformingString;

}

function produceReplacementString(match, digit, charSequence, offset, string) {
  return charSequence.repeat(parseInt(digit));
}

console.log(decodeString("3[a2[c]]"));
console.log(decodeString("100[codesignal]"));
