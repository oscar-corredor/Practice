function sudoku2(grid) {
  const board = new SudokuBoard(grid)
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    
    for (let columnIndex = 0; columnIndex < grid.length; columnIndex++) {
      const element = grid[rowIndex][columnIndex];
      if(element !== '.' && !board.verifyTile(columnIndex, rowIndex, element)) {
        return false;
      }
      
    }
    
  }
  return true;
}

class SudokuBoard{
  constructor(grid){
    this.rows = grid.map(row=> new Map());
    this.columns = grid.map(row => new Map());
    this.grids = [];

    this.grids.push(new Grid(2,2));
    this.grids.push(new Grid(5,2));
    this.grids.push(new Grid(8,2));
    this.grids.push(new Grid(2,5));
    this.grids.push(new Grid(5,5));
    this.grids.push(new Grid(8,5));
    this.grids.push(new Grid(2,8));
    this.grids.push(new Grid(5,8));
    this.grids.push(new Grid(8,8));
  }

  verifyTile(x,y,number) {    
    // verify the row && column
    if(!this.rows[y].has(number) && !this.columns[x].has(number)) {
      this.rows[y].set(number,number);
      this.columns[x].set(number,number);
    }
    else{
      console.log(`rows-tiles verification for: ${x},${x}`);
      return false;}
    // obtain the adequate grid
    const containingGrids = this.grids.filter(grid => grid.tileWithinRange(x,y));
    if(containingGrids.length > 1){
      throw new Error("more than one containing grid.")
    }    
    // verify the grid
    if(!containingGrids[0].numbers.has(number)) {
      containingGrids[0].numbers.set(number,number);
    }
    else {
      console.log(`grid verification for: ${x},${y}`);
      return false;}

    return true;

  }

}

class Grid {
  constructor(x,y) {
    this.numbers = new Map();
    this.x = x;
    this.y = y;
  }

  tileWithinRange(xCoord, yCoord) {
    const xCoordWithinRange = xCoord <= this.x && (this.x - xCoord >=0 && this.x - xCoord <=2);
    const yCoordWithinRange = yCoord <= this.y && (this.y - yCoord >=0 && this.y - yCoord <=2);
    return xCoordWithinRange && yCoordWithinRange
  }
}


//true
// let grid =
//        [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
//false
grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

console.log(sudoku2(grid));