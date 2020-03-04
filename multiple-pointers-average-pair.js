// return bool. Does there exist pair in input array that averages to int avg?
// works only with SORTED ARRAY
// Solves in O(n) time instead of O(n^2) as would be case with nested loops
function averagePair(arr, avg) {
  // initialize two pointers at 0 and last
  // move low pointer up and high pointer down
  // deceptively simple
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let tempAvg = (arr[i] + arr[j]) / 2;
    if (tempAvg === avg) return true;
    if (tempAvg < avg) i++;
    if (tempAvg > avg) j--;
  }
  return false;
}

let ans = averagePair([1, 2, 3, 4, 5, 6], 3);
console.log(ans);
