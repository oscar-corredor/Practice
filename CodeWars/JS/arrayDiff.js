function array_diff(a, b) {
  return a.filter(x => !b.includes(x));
}
console.log(array_diff([1, 2], [1]));