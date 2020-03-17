const recursiveFibonacci = n => {
  if (n <= 2) return 1;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

const memoizedFibonacci = (n, memo = []) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  return memo[n];
};

console.log(recursiveFibonacci(45));
console.log(memoizedFibonacci(45));
