// Write a function for doing an in-place shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandom(floor, ceiling) {
  let range = ceiling - floor;
  let random = Math.round(Math.random() * range);
  return random + floor;
}

// naieve approach, not truly random apparently
// going through each element and swapping it with a random other element
function shuffle(arr) {
  let random;
  for (let i = 0; i < arr.length; i++) {
    random = getRandom(0, arr.length - 1);
    if (random != i) {
      [arr[i], arr[random]] = [arr[random], arr[i]];
    }
  }
  console.log(arr);
  return arr;
}

shuffle(input);

// more rigorous approach
// also called Fisher-Yates shuffle
// goes through each element and only shuffles with elements above it
function betterShuffle(arr) {
  let random;
  for (let i = 0; i < arr.length; i++) {
    random = getRandom(i, arr.length - 1);
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  console.log(arr);
  return arr;
}

betterShuffle(input);
