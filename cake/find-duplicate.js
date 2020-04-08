// Find a duplicate, Space Edition™.

// We have an array of integers, where:

//     The integers are in the range 1....n
//     The array has a length of n+1

// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

// optimize for space!

const test1 = [0, 1, 2, 3, 4, 5, 5, 6];
const test2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const test3 = [0, 9, 1, 8, 3, 7, 4, 6, 5, 9];

function spaceDupe(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      console.log(arr[i]);
      return arr[i];
    }
  }

  console.log('no dupes found!');
}

spaceDupe(test1);
spaceDupe(test2);
spaceDupe(test3);

// this works fine but modifies the input array. If you don't want that, can utilize binary search idea
// create a ceiling, floor and midpoint. Go through all numbers and add them to those under midpoint and those above midpoint. Which ever one has n/2 + 1 elements is the one with an extra element. Split that half in two and continue. Since you're optimizing for space, do it iteratively (with a while loop) rather than recursively
