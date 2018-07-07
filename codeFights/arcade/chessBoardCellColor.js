function chessBoardCellColor(cell1, cell2) {
    return cellIsWhite(cell1) === cellIsWhite(cell2);
}

function cellIsWhite(coordinate) {
    if(coordinate.charCodeAt(0) % 2 !== 0) {
        if(parseInt(coordinate.charAt(1)) % 2 !== 0) {
            // cell is dark
            return false;
        }
        else return true;
    }
    else {
        if(parseInt(coordinate.charAt(1)) % 2 !== 0) {
            return true;
        }
        else return false;
    }
}

console.log(chessBoardCellColor("A1","B2"));
