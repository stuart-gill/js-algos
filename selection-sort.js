// Selection sort is kind of similar to bubble sort, but it doesn't continually swap, and it works in the opposite direction
// First element is checked against all other elements to see if any are smaller. As it goes, it resets lowest. So it will find the lowest element, and then swap its position with that of the first element. Then it will go on to next element and do the same thing--- find the next lowest element, and swap it with whatever is in position 2.

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

let ans = selectionSort([0, 2, 34, 22, 10, 19, 17]);
console.log(ans);
