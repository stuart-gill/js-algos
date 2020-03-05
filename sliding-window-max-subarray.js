//write a function that takes in an array arr and an integer n
//returns sum of greatest summing connected subarray of length n
// [1,2,3,4,5],2 would return 9

function slidingWindow(arr, n) {
  //     let maxSum=0;
  //     edge cases: if n is greater than arr length, return undefined or false or warning
  //     if n is zero, return 0
  //  starting sum is sum of the first $n numbers. Don't have to keep readding numbers, you only add newest number and subtract old
  let startingSum = arr.slice(0, n).reduce((acc, e) => acc + e);
  let maxSum = startingSum;
  for (let i = 0; i < arr.length - n; i++) {
    let tempSum = maxSum - arr[i] + arr[i + n]; //add new element to right, remove oldest element to left
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

let ans = slidingWindow([1, 2, 3, 4, 995, 6], 2);
console.log(ans);
