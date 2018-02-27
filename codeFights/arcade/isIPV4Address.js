function isIPv4Address(inputString) {
  const array = inputString.split(".")
  const validQuantity = array.length === 4;
  const validNumbers = array.filter(x => (parseInt(x) > 255 ||  isNaN(parseInt(x)) || /([0-9]+[a-z]+)/.test(x))).length === 0;
  return validNumbers && validQuantity;
}

console.log(isIPv4Address("172.16.254.1"));