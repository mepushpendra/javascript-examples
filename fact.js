function factorial(x) {
  let nextNum = x-1;
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(nextNum);
}
console.log(factorial(5));