function differentSymbolsNaive(s) {
  let map = new Map();
  s.split('').map(char => map.set(char,char));
  return map.size();
}
