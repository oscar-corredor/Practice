function isValidIP(str) {
  const octects = str.split('.');
  if (octects.length === 4) {
    for (octet of octects) {
      // check if it starts with 0
      if (octet[0] === '0') {
        return false;
      }
      const intRepresentation = parseInt(octet, 10);
      if (isNaN(intRepresentation) || intRepresentation <= 0 || intRepresentation >= 255) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isValidIP('123.45.67.8'));
