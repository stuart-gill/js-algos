function validAnagram(s1, s2) {
  //input - two strings
  //output -- boolean if anagrams
  //edge cases -- less than two inputs, inputs not both strings
  //can also test string length, cos must be equal
  //steps:
  //check string length;
  //create two frequency objects
  //loop through string one and use it to fill freq object one
  //same for loop two
  //compare objects
  //if they are the same, return true
  //else return false

  //another method (shown here): use one frequency object; after creating it with first string, use second
  // string to subtract from it, then check that all keys = 0
  if (s1.length !== s2.length) {
    return false;
  }
  let freq1 = {};
  // let freq2 = {};
  for (let e of s1) {
    freq1[e] ? (freq1[e] += 1) : (freq1[e] = 1);
  }
  for (let e of s2) {
    if (!freq1[e]) {
      return false;
    }
    freq1[e] -= 1;
  }
  return true;
}

let ans = validAnagram('racecar', 'rraacce');

console.log(ans);
