function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(elem => elemToReplace === elem? substitutionElem : elem);
}