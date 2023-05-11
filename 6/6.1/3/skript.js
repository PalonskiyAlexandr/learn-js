function fib(n) {
  let first = 1;
  let second = 1;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = first+second;
    first = second;
    second = sum;
  }
  return sum;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
