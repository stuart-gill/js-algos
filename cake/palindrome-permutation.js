//  Write an efficient function that checks whether any permutation of an input string is a palindrome

// You can assume the input string only contains lowercase letters.

// Examples:

//     "civic" should return true
//     "ivicc" should return true
//     "civil" should return false
//     "livci" should return false

// idea-- use a frequency object

function isPalindrome(word) {
  let frequency = {};
  for (let char of word) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  let odds = 0;
  for (let value of Object.values(frequency)) {
    if (value % 2 === 1) {
      odds++;
      if (odds > 1) return false;
    }
  }
  return true;
}

console.log(isPalindrome('civic'));
console.log(isPalindrome('civiccc'));
console.log(isPalindrome('civil'));

// alternate version using set... only adds characters to set if they are unpaired, removes them once they are paired!

function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

console.log(hasPalindromePermutation('civic'));
console.log(hasPalindromePermutation('civiccc'));
console.log(hasPalindromePermutation('civil'));
