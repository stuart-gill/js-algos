// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.
const withNegs = [-10, -10, 1, 3, 2];
const withNegs2 = [1, 10, -5, 1, -100];

function hp(intArr) {
  intArr.sort();
  let l = intArr.length;
  let includeNegs = intArr[0] * intArr[1] * intArr[l - 1];
  let noNegs = intArr[l - 1] * intArr[l - 2] * intArr[l - 3];
  return includeNegs > noNegs ? includeNegs : noNegs;
}

function hpNoSort(intArr) {
  let [first, second, third] = [intArr[0], intArr[1], intArr[2]];
  let lowest = Math.min(first, second);
  let highest = Math.max(first, second);
  let lowestProductOf2 = first * second;
  let highestProductOf2 = first * second;
  let highestProductOf3 = first * second * third;

  // could also use Math.max and Math.min instead of conditionals
  for (let i = 2; i < intArr.length; i++) {
    current = intArr[i];
    if (current * highestProductOf2 > highestProductOf3) {
      highestProductOf3 = current * highestProductOf2;
    } else if (current * lowestProductOf2 > highestProductOf3) {
      highestProductOf3 = current * lowestProductOf2;
    }
    if (current * lowest < lowestProductOf2)
      lowestProductOf2 = current * lowest;
    if (current * highest > highestProductOf2)
      highestProductOf2 = current * highest;
    if (current < lowest) lowest = current;
    if (current > highest) highest = current;
    console.log(
      `lowest= ${lowest} highest= ${highest} lowestProductOf2= ${lowestProductOf2} highestProductOf2= ${highestProductOf2} highestProductOf3= ${highestProductOf3}`
    );
  }
  return highestProductOf3;
}

console.log(hp(withNegs));
console.log(hp(withNegs2));

console.log(hpNoSort(withNegs));
console.log(hpNoSort(withNegs2));
