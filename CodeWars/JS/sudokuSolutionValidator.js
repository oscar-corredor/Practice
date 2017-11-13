function validSolution(board) {
  for (let i = 0; i < 9; i += 1) {
    const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let row = 0; row < 9; row += 1) {
      const rowNumber = board[i][row];
      numbers[rowNumber] += 1;
    }
    for (let column = 0; column < 9; column += 1) {
      const columnNumber = board[column][i];
      numbers[columnNumber] += 1;
    }
    if (numbers[0] !== 0) {
      return false;
    }
    numbers[0] = 2;
    if (numbers.filter(x => x !== 2).length > 0) {
      return false;
    }
  }
  return true;
}

console.log(validSolution(
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]

  ]));

//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [2, 3, 1, 5, 6, 4, 8, 9, 7],
//   [3, 1, 2, 6, 4, 5, 9, 7, 8],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [5, 6, 4, 8, 9, 7, 2, 3, 1],
//   [6, 4, 5, 9, 7, 8, 3, 1, 2],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [8, 9, 7, 2, 3, 1, 5, 6, 4],
//   [9, 7, 8, 3, 1, 2, 6, 4, 5]
// ]
