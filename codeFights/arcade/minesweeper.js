function minesweeper(matrix) {
    const result = [];
    for(let i = 0; i < matrix.length; i++) {
        result.push([]);
        for(let j = 0; j < matrix[0].length; j++) {
            result[i].push(countMines(matrix, i, j));
        }
    }
    return result;
}

function countMines(matrix, row, column) {
    let totalMines = 0;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let nRowCoordinate = row + i;
            let nColumnCoordinate = column + j;

            if((nRowCoordinate !== row || nColumnCoordinate !== column) && coordinateWithinBounds(matrix, nRowCoordinate, nColumnCoordinate)) {
                if(matrix[nRowCoordinate][nColumnCoordinate]) {
                    totalMines += 1;
                }
            }
            
        }
        
    }

    return totalMines;
}

function coordinateWithinBounds(matrix, row, column) {
    return row >= 0 && row < matrix.length && column >= 0 && column < matrix[0].length;
}


console.log(minesweeper(
    [
    [true,false,false], 
    [false,true,false], 
    [false,false,false]]));