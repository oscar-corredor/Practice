function stringsRearrangement(inputArray) {
    const result = [];
    result.push(inputArray.shift());
    while (inputArray.length > 0) {
        let foundMatch = false;
        for (let index = 0; index < inputArray.length; index++) {
            const element = inputArray[index];
            if (insertString(result, element)) {
                inputArray.splice(index, 1);
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) {
            return false;
        }
    }
    return true;
}

function insertString(currentResult, possibleString) {
    // if(currentResult.length > 1 && differByOneCharacter(currentResult[currentResult.length -1].split(''), possibleString.split(''))) {
    //     currentResult.push(possibleString);
    //     return true;
    // }
    // else {
    //     if(differByOneCharacter(currentResult[0].split(''), possibleString.split(''))) {
    //         currentResult.unshift(possibleString);
    //         return true;
    //     }
    //     return false;
    // }
    for (let index = 0; index < currentResult.length; index++) {
        const element = currentResult[index];
        if(differByOneCharacter(element.split(''),possibleString.split(''))) {
            if(index === 0) {
                // just insert it on it's left side
                currentResult.unshift(possibleString);
                return true;
            }
            else if(index === currentResult.length -1) {
                currentResult.push(possibleString);
                return true;
            }
            else if(differByOneCharacter(currentResult[index+1].split(''), possibleString)) {
                currentResult.splice(index+1, 0, possibleString);
                return true;
            }
        }
    }
    return false;        
}

function differByOneCharacter(first, second) {
    let differentCharacters = 0;
    for (let index = 0; index < first.length; index++) {
        if (first[index] !== second[index]) {
            differentCharacters++;
            if (differentCharacters > 1) {
                return false;
            }
        }

    }
    return differentCharacters === 1;
}

console.log(stringsRearrangement(["ab", 
"bb", 
"aa"])); 
