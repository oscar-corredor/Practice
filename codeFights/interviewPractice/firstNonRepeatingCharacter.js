function firstNotRepeatingCharacter(s) {
  let characterCount = new Map();

  s.split("").forEach((element) => {
    if(characterCount.has(element)) {
      characterCount.set(element, characterCount.get(element)+1);
    }
    else characterCount.set(element,1);
  });

  for (var [key, value] of characterCount) {
    if(value === 1) return key;
  }
  return '_'
}

console.log(firstNotRepeatingCharacter("abacabad"));
