// tryig to find shortest contiguous subarray that adds up to x-- return length of that subarray
// using sliding window, and tracking array start and stop

function minSubArrayLen(arr, x) {
  // moving window. move window right
  // start min length at 0
  // but is this possible, usually the window carries a sum, in this case it needs to carry length of array as well. Do you need a variable that tracks array length?
  // no, just need variables to track window start and end, and to track current total
  // while window start is less than arr length:
  // if current total is less than x, add one to end.
  // if current total is greater than x, take current array length and put it in minLen variable, if it is less than current min length variable
  //
  let minLen = Infinity;
  let sum = 0;
  let winStart = 0;
  let winEnd = 0;
  while (winStart < arr.length) {
    if (sum < x && winEnd < arr.length) {
      sum += arr[winEnd];
      winEnd++;
    } else if (sum >= x) {
      minLen = Math.min(minLen, winEnd - winStart);
      sum -= arr[winStart];
      winStart++;
    } else break;
  }
  return minLen === Infinity ? 0 : minLen;
}

let ans = minSubArrayLen([1, 2, 4, 5, 3, 4, 5, 6, 7], 15);
console.log(ans);
