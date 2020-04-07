// merge already sorted arrays

const myArray = [3, 4, 6, 10, 11, 15, 21, 22, 23];
const alicesArray = [1, 5, 8, 12, 14, 19];

function mergeArrays(arr1, arr2) {
  let merged = [];
  let totalElements = arr1.length + arr2.length;
  while (merged.length < totalElements) {
    if (arr1.length && (arr1[0] < arr2[0] || !arr2.length)) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  return merged;
}

function mergeNonMutating(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let totalElements = arr1.length + arr2.length;

  while (index1 + index2 < totalElements) {
    if (
      index1 < arr1.length &&
      (arr1[index1] < arr2[index2] || index2 >= arr2.length)
    ) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }
  return merged;
}
console.log(mergeNonMutating(myArray, alicesArray));

console.log(mergeArrays(myArray, alicesArray));

// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
