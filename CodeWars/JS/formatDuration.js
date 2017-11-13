const periods = [{ name: 'year', amount: 31536000 }, { name: 'day', amount: 86400 }, { name: 'hour', amount: 3600 }, { name: 'minute', amount: 60 }, { name: 'second', amount: 1 }];

function getDurationAmount(seconds, amount) {
  if (seconds < amount) {
    return { times: 0, remainder: seconds };
  }
  const times = Math.floor(seconds / amount);
  return { times, remainder: seconds % amount };
}

function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }
  const amounts = periods.map((x) => {
    const { times, remainder } = getDurationAmount(seconds, x.amount);
    seconds = remainder;
    return { times, name: x.name }; 
  }).filter(x => x.times > 0);
        return amounts.reduce((accumulator, currentValue) => {
            let result = "";
            if (currentValue.times == 0) {
                return accumulator + "";
            }
            else {
                if (currentValue.times == 1) {
                    // singular case
                    result = currentValue.times + " " + currentValue.name;
                }
                else if (currentValue.times > 1) {
                    // plural case
                    result = currentValue.times + " " + currentValue.name + "s";
                }
                if (accumulator.length > 0) {
                    if (amounts.indexOf(currentValue) == amounts.length - 1) {
                        return accumulator + " and " + result
                    }
                    else return accumulator + ", " + result
                }
                else return result;
            }

        }, "");
    
}



console.log(formatDuration(3662));
// console.log(formatDurati(1));
// console.log(formatDuration(62));
// console.log(formatDuration(120));
// console.log(formatDuration(3600));
// console.log(formatDuration(3662));
