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
