function sudoku2(grid) {
  return true && checkRows(grid);
}

function checkRows(grid) {
  for(let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    let row = grid[rowIndex];
    let numbers = new Map();    
    for (let index = 0; index < row.length; index++) {
      const element = row[index];
      if(element !== "." && numbers.has(element)){
        return false;
      }
      else numbers.set(element,1);      
    }
  }
  return true;  
}

function checkColumns(grid) {
  for (let row = 0; row < grid.length; row++) {    
    let columnNumbers
    for (let column = 0; column < row.length; column++) {
      const element = grid[row][column];

      
    }
    
  }
}

let grid =
       [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

console.log(sudoku2(grid));