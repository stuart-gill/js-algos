// input is a sorted array of numbers
// output is integer-- number of unique numbers in array
// use multiple pointers to crawl the array without nested loops

function countUniqueValues(arr) {
  // input is sorted array of numbers
  // initialize two counters at positions 0 and 1
  // every time the counters are equal, move right counter
  // if not equal, add one to count, then make counter1=counter2, then increment counter2
  let p1 = 0;
  let p2 = 1;
  let count = arr.length === 0 ? 0 : 1;
  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      count += 1;
      p1 = p2;
    }
    p2 += 1;
  }
  return count;
}

let ans = countUniqueValues([1, 1, 1, 2, 2, 2]);
console.log(ans);
