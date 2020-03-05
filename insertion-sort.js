// starts at beginning of array
// dis one is confusing...

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    console.log(`current val=${currentVal}`);
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] < currentVal) {
        console.log('BREAK!');
        break;
      }
      //this line copies the bigger number up one index
      arr[j + 1] = arr[j];
      console.log(`arr inner loop: ${arr}`);
    }
    arr[j + 1] = currentVal;
    console.log(`j: ${j} arr outer loop: ${arr}`);
  }
  return arr;
}

let ans = insertionSort([2, 1, 9, 76, 4]);
console.log(ans);
