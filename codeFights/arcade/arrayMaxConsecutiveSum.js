function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  
  let i = 0;

  while (i < k) {
    max += inputArray[i];
    i++;
  }

  let currentSum = max;
  for (let index = k; index < inputArray.length; index++) {
    currentSum += inputArray[index];
    currentSum -= inputArray[index-k];
    if(currentSum > max) {
      max = currentSum;
    }    
  }

  return max;

}

console.log(arrayMaxConsecutiveSum([1, 3, 2, 4],3));
