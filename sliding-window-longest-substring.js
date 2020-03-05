// find longest substr that has all unique characters
// input=string
// output=integer, length of longest substr with unique chars
// use sliding window method... sort of like multiple pointers except using everything between two pointers, which forms the window

function longestSubstring(str) {
  // variable for longest substring
  // variable for index of start and stop
  let start = 0;
  let end = 0;
  let longest = 0;
  let current = '';
  if (str.length === 0) return 0;
  while (start < str.length) {
    // while we aren't to the end of the string, check $current length, compare with longest, add to current and iterate end (slide end of window)
    if (!current.includes(str[end]) && end < str.length) {
      longest = Math.max(longest, current.length);
      current += str[end];
      end++;
    } else if (current.includes(str[end])) {
      //if $current already has new element in it, remove first element and iterate start (slide start of window)
      current = current.substr(1);
      start++;
    } else break;
  }
  return longest + 1;
}

let ans = longestSubstring('abcdefghitettkoij');
console.log(ans);
