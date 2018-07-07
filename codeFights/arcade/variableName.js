function variableName(name) {
    let allCharactersValid = name.split("").filter(elem => 
        {
            let bool = (elem.charCodeAt(0) >= 0 && elem.charCodeAt(0) <= 47) || 
            (elem.charCodeAt(0) >= 58 && elem.charCodeAt(0) <= 64) ||
            (elem.charCodeAt(0) >= 91 && elem.charCodeAt(0) <= 94) ||
            elem.charCodeAt(0) === 96;            
            return bool;
        }).length === 0;
    let startsWithNonDigit = (name.split("")[0].charCodeAt(0) < 48 || name.split("")[0].charCodeAt(0) > 57);
    return allCharactersValid && startsWithNonDigit;
}

console.log(variableName("2w2"));