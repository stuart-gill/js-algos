// reverse an array of characters in place, without creating new array

const input = ['a', 'b', 'c', 'holymoly', 'd', 'e', 'f'];

function reverse(inputArray) {
  let complementaryIndex;
  // only loop through half the array, otherwise you'd reverse twice and end up back forward again
  for (let i = 0; i < inputArray.length / 2; i++) {
    // set complementary index
    complementaryIndex = inputArray.length - (i + 1);
    // swap element with its complementary element, same length from end as from front
    [inputArray[i], inputArray[complementaryIndex]] = [
      inputArray[complementaryIndex],
      inputArray[i],
    ];
    console.log(inputArray);
  }
  return inputArray;
}

reverse(input);
