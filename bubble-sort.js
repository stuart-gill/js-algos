const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// Unoptimized bubble sort
// Lets largest numbers bubble to the top
// first loop will find largest number and bubble it all the way up
// second loop will find second largest number and bubble it up to arr.length-2 etc.

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

let ans = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(ans);

// Optimized BubbleSort with noSwaps
// if one pass of bubbling (one outer loop) is completed with no swaps at all,
function optimizedBubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

let optAns = optimizedBubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(optAns);
