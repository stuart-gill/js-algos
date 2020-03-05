// Reverse a string recursively
// Input string, output string
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
function reverse(str) {
  // base case
  if (str.length === 0) return '';
  // then iterate
  return str.slice(-1) + reverse(str.slice(0, -1));
}

let reverseAns = reverse('awesome');
console.log(`The reverse of the word 'awesome' is ${reverseAns}`);

// **************************************************
// **************************************************

// Palindrome checker. Input string, output boolean
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // base case for last two chars
  if (str.length === 2) return str[0] === str[1];
  // base case for single char (if string.length is odd)
  if (str.length === 1) return true;
  // anytime this conditional fails we'll fall to "false"
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

let palAns1 = isPalindrome('awesome');
let palAns2 = isPalindrome('tacocat');
console.log(
  `Is 'awesome' a palindrome? ${palAns1}. Is 'tacocat' a palindrome? ${palAns2}.`
);

// **************************************************
// **************************************************

// Write a function that accepts an array and a callback; the callback accepts a single integer and returns a boolean.
// The function should return a boolean; true if a single value in the array returns true
// (This is just a recursive version of Array.prototype.some())
// SAMPLE INPUT / OUTPUT
// CALLBACK DEF: const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (arr.length === 1) return callback(arr[0]);
  if (callback(arr[0]) === true) return true;
  return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;

let someAns = someRecursive([4, 6, 8, 9], isOdd);
console.log(`Of the #s 4,6,8,9, are any of them odd? ${someAns}`);

// **************************************************
// **************************************************

// Write a recursive version of Array.prototype.flat(), except without depth parameter
// Input-- array. Output-- new array with all sub elements concatenated into it
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

let flatAns = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
console.log(flatAns);

// **************************************************
// **************************************************

// Write a function that takes an array of strings and capitalizes the first letter of each of them
// Using a recursive helper function on this one, that pushes each word as it's capitalized
function capitalizeFirst(array) {
  let answer = [];

  // note that answer array created outside of recursive loop
  function helper(input) {
    if (input.length === 0) return;
    let currentWord = input[0];
    answer.push(currentWord[0].toUpperCase().concat(currentWord.substr(1)));
    return helper(input.slice(1));
  }

  helper(array);
  return answer;
}

let capAns = capitalizeFirst(['car', 'taco', 'banana']);
console.log(capAns);

// **************************************************
// **************************************************

// Nested Even Sum -- return sum of all numbers in an object which may contain nested objects

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// with this one, we're passing a sum value in as an argument
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    // if value is an object, drill into it. Otherwise, if value is an even number, add it to sum
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] == 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

let nestedAns1 = nestedEvenSum(obj1); // 6
let nestedAns2 = nestedEvenSum(obj2); // 10

console.log([nestedAns1, nestedAns2]);
