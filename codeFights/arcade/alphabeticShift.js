function alphabeticShift(inputString) {
    return inputString.split("").map(elem => {
        let nChar;
        if(elem.charCodeAt(0) === 122) {
            nChar = 97;
        }
        else nChar = elem.charCodeAt(0)+1;

        return String.fromCharCode(nChar);
    }).join('');
}

console.log(alphabeticShift("abc"));
console.log(alphabeticShift("def"));
console.log(alphabeticShift("xyz"));
console.log(alphabeticShift("zzzz"));