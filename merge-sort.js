// helper function for merge sort
// merge two SORTED arrays
// simple enough -- if array 1 has lower number, push it to blank array. If array 2 has lower number, push it.
// in this way, build a new sorted array from the two input arrays
function merge(arr1, arr2) {
  let ans = [];
  let i = 0;
  let j = 0;
  // if we still have unsorted elements in arr1 AND arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  // use any remaining elements from arr 1 or arr 2. Only one of these while loops (maximum) may run

  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }

  return ans;
}

merge([1, 3, 5, 9, 9, 9], [2, 4, 6, 8, 10]);

// merge sort will recursively split array, then sort and merge them. The sorting starts out between two one element arrays and grows from there.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

let ans = mergeSort([1, 4, 7, 3, 6, 45, 36, 87, 55, 22]);
console.log(ans);
