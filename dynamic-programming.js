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

console.log(recursiveFibonacci(10));
console.log(memoizedFibonacci(45));

// tabulation is like memoization but building up from the bottom rather than top down.
// also not recursive
const tabulatedFibonacci = n => {
  let fibSeq = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq[n];
};

console.log(tabulatedFibonacci(45));
