// pivotHelper is a somewhat confusing one... this actively swaps elements of array so they are arranged relative to first element, then (at the end) moves first element into its proper place. This means that first elment is now in its FINAL position, because all smaller elements are beneath it, and all larger elements are above it-- even though none of those elements are sorted relative to eachother, within their own groups.

// helper, swaps two elements of an array in place
function eSwap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  // pivot will always be first element in array or subarray
  let pivot = arr[start];
  let swapIndex = start;

  // move all elements smaller than the pivot to be before all elements bigger than the pivot
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      eSwap(arr, swapIndex, i);
      // check array every iteration to see whats happening
      console.log(arr);
    }
  }

  //at this point, pivot is still arr[start], so we swap its position with that of the last element smaller than pivot
  // after this, the pivot element will be in its final sorted position. Will not change index again.
  eSwap(arr, start, swapIndex);
  return swapIndex;
}

// TEST
pivotHelper([5, 2, 7, 3, 9, 4]);

// this part is confusing, because quickSort and pivotHelper BOTH take same parameters
// note that in contrast to merge sort, I'm not assigning result of quickSort to left or right variables, just running quickSort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 2, 7, 3, 9, 4]));
