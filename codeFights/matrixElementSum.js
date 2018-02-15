function matrixElementsSum(matrix) {
  const nullColumns = []
  let totalCost = 0;
  for(let row of matrix) {
      row.forEach((element, index) => {            
          if(nullColumns.indexOf(index) === -1) {
              totalCost+=element;
          }
          if( element === 0) {
              nullColumns.push(index);
          }
      })
  }
  return totalCost;
}

console.log(matrixElementsSum([[0,1,1,2], 
  [0,5,0,0], 
  [2,0,3,3]]));