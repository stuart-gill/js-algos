// given two positive integers, determine if they have the same frequency of digits
// very basic frequency counter problem

function sameFrequency(n1, n2) {
  n1 = n1.toString();
  n2 = n2.toString();
  if (n1.length !== n2.length) return false;
  //   build frequency object for n1
  let freq = {};
  for (let e of n1) {
    freq[e] ? freq[e]++ : (freq[e] = 1);
  }
  for (let e of n2) {
    if (!freq[e]) return false;
    freq[e]--;
  }
  return true;
}

sameFrequency(12113, 21121);
