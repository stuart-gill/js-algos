// recursively implement Math.pow, same parameters (base, exp)
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

let powerAns = power(2, 5);
console.log(`2^5 = ${powerAns}`);

// recursively implement a factorial solution.
// one parameter, integer. Return factorial of that number
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

let factorialAns = factorial(5);
console.log(`5! = ${factorialAns}`);

// recursively calculate the product of all numbers in an input array
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

let productAns = productOfArray([2, 4, 6, 10]);
console.log(`the product of 2 4 6 and 10 = ${productAns}`);

// Return the sum of all integers under a given input integer
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

let sumAns = recursiveRange(5);
console.log(`the sum of all integers 5 and under is ${sumAns}`);

// Function should take in an integer and return that index of the fibonacci sequence (1,1,2,3,5,8...)
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

let fibAns = fib(35);
console.log(`the 35th element of the fibonacci sequence is ${fibAns}`);
