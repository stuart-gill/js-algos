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
