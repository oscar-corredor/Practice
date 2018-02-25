function avoidObstacles(inputArray) {
  inputArray.sort((a,b) => a-b);

  let previousHole = 0;
  let minimumJump = null;

  for(let i = 1; i<inputArray.length; i++) {
    if(inputArray[i]-inputArray[i-1] !== 1) {
      // there is a hole we can jump on
      if(minimumJump === null) {
        // initial setting of the minimal jumping distance
        minimumJump = inputArray[i-1]+1;
        previousHole = inputArray[i-1]+1;
      }
      else {
        if() {
          
        }
      }
    }
  }

}
