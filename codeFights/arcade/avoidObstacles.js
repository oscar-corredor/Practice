function avoidObstacles(inputArray) {
  inputArray.sort((a,b) => a-b);
  const lastValue = inputArray[inputArray.length-1];
  for(let i = 1; i < lastValue; i++) {
    if(inputArray.every(x=> x % i !== 0)){
      return i;
    }
  }
  return lastValue+1;
}
