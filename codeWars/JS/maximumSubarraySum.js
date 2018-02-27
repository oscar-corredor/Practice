var maxSequence = function (arr) {
    // ...
    if(arr.length == 0 || arr.filter(x => x > 0).length==0)
    {
        return 0;
    }
    let finalSum = arr[0];
    let finalStart = 0;
    let finalEnd = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentMaxSum = arr[i];
        let currentSum = arr[i];
        let start = i;
        let end = i;
        
        for (let j = i+1; j < arr.length; j++) {
            currentSum += arr[j];
            if(currentSum > currentMaxSum) {
                end = j;
                currentMaxSum = currentSum;
            }
        }
        if (currentMaxSum > finalSum) {
            finalStart = start;
            finalEnd = end;
            finalSum = currentMaxSum;
        }
    }
    // return {start: finalStart, end: finalEnd};
    return arr.slice(finalStart,finalEnd+1).reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  // should be 6: [4, -1, 2, 1]