
function findMissingLetter(array) {
    let previous = -1;
    for (let i = 0; i < array.length; i++) {
        c = array[i];
        if (previous === -1) {
            previous = c.charCodeAt(0);
        }
        else {
            let current = c.charCodeAt(0);
            if (current - previous != 1) {
                return returny = String.fromCharCode(previous + 1);
            }
            previous = current;
        }
    }

}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));