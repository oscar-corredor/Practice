function palindromeRearranging(inputString) {
    const inputArray = inputString.split("");
    // gather the count of characters
    const characterCountMap = new Map();
    inputArray.reduce((accumulator, currentValue) => {
        if (!accumulator.has(currentValue)) {
            accumulator.set(currentValue, 1);
        }
        else accumulator.set(currentValue, accumulator.get(currentValue) + 1);

        return accumulator;
    }, characterCountMap);
    let isPalindrome = true;

    if (inputArray.length % 2 === 0) {
        characterCountMap.forEach((value, key, map) => {
            if (value % 2 !== 0) {
                isPalindrome = false;
            }
        });
    }
    else {
        let oddFound = false;        
        characterCountMap.forEach((value, key, map) => {
            if (value % 2 !== 0) {
                if(oddFound) {
                    isPalindrome = false;
                }
                else {
                    oddFound = true;
                }
            }
            
        });

    }

    return isPalindrome;

}

// console.log(palindromeRearranging("zaa"));
// console.log(palindromeRearranging("ababa"));
console.log(palindromeRearranging("abbcabb"));