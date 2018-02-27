const memory = {};
function fibonacci(n) {
  if (memory[n] != null) {
    return memory[n];
  } else if (n === 0 || n === 1) {
    memory[n] = n;
    return n;
  }

  const firstTerm = n - 1;
  const secondTerm = n - 2;
  if (memory[secondTerm] == null) {
    fibonacci(secondTerm);
  }
  if (memory[firstTerm] == null) {
    fibonacci(firstTerm);
  }
  memory[n] = memory[firstTerm] + memory[secondTerm];
  return memory[n];
}
console.log(fibonacci(70));
