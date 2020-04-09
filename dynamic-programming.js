// RECURSIVE
const recursiveFibonacci = (n) => {
  if (n <= 2) return 1;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(10));

// RECURSIVE MEMOIZED
const memoizedFibonacci = (n, memo = []) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  return memo[n];
};

console.log(memoizedFibonacci(45));

// RECURSIVE MEMOIZED IN CLASS

class Fib {
  constructor() {
    this.memo = [];
  }

  memoizedFib = (n) => {
    if (n <= 2) return 1;
    if (this.memo[n]) return this.memo[n];
    this.memo[n] = this.memoizedFib(n - 1) + this.memoizedFib(n - 2);
    return this.memo[n];
  };
}

let fibber = new Fib();
console.log('class based memo version for 34 ' + fibber.memoizedFib(34));

// tabulation is like memoization but building up from the bottom rather than top down.
// also not recursive
const tabulatedFibonacci = (n) => {
  let fibSeq = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq[n];
};

console.log(tabulatedFibonacci(45));

// lightweight bottom up fibonacci per interview cake-- basically the same as tabulated, but maintaining only three integer variables instead of an array
const fibLight = (n) => {
  if (n < 1) console.log("we're starting with 1");
  if (n === 1 || n === 2) return 1;

  let twoAgo = 1;
  let oneAgo = 1;
  let current;

  for (let i = 2; i < n; i++) {
    current = oneAgo + twoAgo;
    twoAgo = oneAgo;
    oneAgo = current;
  }
  return current;
};

console.log(fibLight(45));
