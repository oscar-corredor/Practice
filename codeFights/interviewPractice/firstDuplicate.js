function firstDuplicate(a) {
  let duplicates = new Map();
  let firstDuplicate = -1;
  for (const element in a) {
    if(duplicates.has(a[element])) {
      firstDuplicate = a[element];
      break;
    }
    else duplicates.set(a[element],a[element]);
  }
  return firstDuplicate;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
