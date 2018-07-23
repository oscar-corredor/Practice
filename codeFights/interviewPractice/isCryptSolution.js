function isCryptSolution(crypt, solution) {
  const values = new Map();

  solution.forEach(element => {
    values.set(element[0],element[1]);    
  });
  try {
    const equation = crypt.map(word => getWordNumber(word, values));
    console.log(equation);
    return equation[0]+equation[1] === equation[2];
    
  } catch (error) {
    console.log("leading zero");
    return false;
  }
}

function getWordNumber(word, values) {
  let stringRepresentation = "";
  word.split("").forEach(element => {
    stringRepresentation += values.get(element);
  });

  if(stringRepresentation.length > 1 && stringRepresentation[0] === "0"){
    throw new Error("Contains leading zeroes");
  }
  return parseInt(stringRepresentation);
}

console.log(isCryptSolution(["SEND", 
"MORE", 
"MONEY"]
,[["O","0"], 
["M","1"], 
["Y","2"], 
["E","5"], 
["N","6"], 
["D","7"], 
["R","8"], 
["S","9"]]));
// console.log(isCryptSolution(["TEN", "TWO", "ONE"]
// ,[['O', '1'],
// ['T', '0'],
// ['W', '9'],
// ['E', '5'],
// ['N', '4']]));