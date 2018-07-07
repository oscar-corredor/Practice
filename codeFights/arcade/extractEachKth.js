function extractEachKth(inputArray, k) {
  const result = [];

  for (let index = 0; index < inputArray.length; index++) {
    if((index+1) % (k) !== 0) {
      result.push(inputArray[index]);
    }
  }
  return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3));
