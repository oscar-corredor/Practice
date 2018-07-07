function worldCupStages(results) {
  let result = ["|", "|"]

  let index = 0;

  results.reduce((result, group) => {
    if (index % 2 === 0 || index === 0) {
      let firstOfGroup = group[0];
      let secondOfGroup = results[index + 1][1];
      let firstOfSecondGroup = results[index + 1][0];
      let secondOfSecondGroup = group[1];
      //1st vs 2nd      
      let firstSpaces, secondSpaces;
      ({ firstSpaces, secondSpaces } = calculateSpaces(firstOfGroup, secondOfGroup));
      result[0] += `${firstOfGroup}${" ".repeat(firstSpaces)}|`;
      result[1] += `${secondOfGroup}${" ".repeat(secondSpaces)}|`;
      //2nd vs 1st      
      ({ firstSpaces, secondSpaces } = calculateSpaces(firstOfSecondGroup, secondOfSecondGroup));
      result[0] += `${firstOfSecondGroup}${" ".repeat(firstSpaces)}|`
      result[1] += `${secondOfSecondGroup}${" ".repeat(secondSpaces)}|`
    }
    index++;
    return result;

  }, result);

  return result;
}

function calculateSpaces(first, second) {
  let firstSpaces = 0;
  let secondSpaces = 0;
  if (first.length > second.length) {
    secondSpaces = first.length - second.length;
  }
  else firstSpaces = second.length - first.length;

  return { firstSpaces: firstSpaces, secondSpaces: secondSpaces };
}

results = [
  ["Uruguay", "Russia", "Egypt", "Saudi Arabia"],
  ["Spain", "Portugal", "Iran", "Morocco"],
  ["France", "Denmark", "Peru", "Australia"],
  ["Croatia", "Argentina", "Nigeria", "Iceland"],
  ["Brazil", "Switzerland", "Serbia", "Costa Rica"],
  ["Sweden", "Mexico", "South Korea", "Germany"],
  ["Belgium", "England", "Tunisia", "Panama"],
  ["Colombia", "Japan", "Senegal", "Poland"]
]
worldCupStages(results).forEach(element => {
  console.log(element);
});;
// worldCupStages(results) = ["|Uruguay |Spain |France   |Croatia|Brazil|Sweden     |Belgium|Colombia|",
//                            "|Portugal|Russia|Argentina|Denmark|Mexico|Switzerland|Japan  |England |"]