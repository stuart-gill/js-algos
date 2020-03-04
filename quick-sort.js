// pivotHelper is a somewhat confusing one... this actively swaps elements of array so they are arranged relative to first element, then (at the end) moves first element into its proper place. This means that first elment is now in its FINAL position, because all smaller elements are beneath it, and all larger elements are above it-- even though none of those elements are sorted relative to eachother, within their own groups.

// helper, swaps two elements of an array in place
function eSwap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[0];
  let pivotIndex = 1;
  // as loop moves through index, swaps elements smaller than pivot to beginning of array.
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      eSwap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  // now that all elements smaller than pivot are at beginning of array, we swap the pivot element with the last element that was smaller than pivot (current pivotIndex). This means that pivot element is now in its final position. Will never change index again.
  eSwap(arr, 0, pivotIndex);
  console.log(arr);
  return pivotIndex;
}

// TEST
// console.log(pivotHelper([5, 2, 7, 3, 9, 4]));

// this part is confusing, because quickSort and pivotHelper BOTH take same parameters
// note that in contrast to merge sort, I'm not assigning result of quickSort to left or right variables, just running quickSort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);
    quickSort(arr, 0, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 2, 7, 3, 9, 4]));
