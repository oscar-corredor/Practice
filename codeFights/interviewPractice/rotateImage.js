function rotateImage(a) {
  // Given that its an array of arrays, we need to do the slice in the subArrays
  let copy = a.map(row => row.slice(0));  
  for(let row = 0; row < a.length; row++) {
    for(let column = 0; column < a.length; column++) {
      let nColumn = Math.abs(row-(a.length-1)); 
      copy[column][nColumn] = a[row][column];
    }
  }
  return copy;
}

console.log(rotateImage([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]));

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
