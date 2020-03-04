// check to see if all chars in str1 exist in str2 IN ORDER. don't have to be consecutive though

function isSubsequence(str1, str2) {
  // initialize two pointers, both at zero, one for each string
  // find element 0 of str1 in str2, if none, false
  // find element 1 of str1 in str2, if none, false
  // etc. important!  pointer 2 can never go back down
  let p1 = 0;
  let p2 = 0;
  // if string 1 is longer than string 2, string 2 cannot contain string 1
  if (str1.length > str2.length) return false;
  while (p2 < str2.length) {
    // if pointers point to same character in both strings, then iterate both pointers. Otherwise, iterate only p2
    if (str1[p1] === str2[p2]) {
      p1++;
      p2++;
    } else p2++;
    if (p1 === str1.length) return true;
  }
  return false;
}

let ans1 = isSubsequence('abc', 'aaavdgdfgbdfdfgc');
let ans2 = isSubsequence('abc', 'aaavdgdfgbdfdfg');
console.log([ans1, ans2]);
