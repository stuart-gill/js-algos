// helper method that tells you what number is in a certain place, base ten
// INPUT- integer and integer. OUTPUT- integer
// getDigit(12345, 4) should return 2

const getDigit = (num, negIndex) => {
  let temp = Math.floor(num / Math.pow(10, negIndex - 1));
  return temp - Math.floor(temp / 10) * 10;
};
console.log(getDigit(244546345, 5));

// Helper method: how many digits does a number have?

const countDigits = num => {
  let count = 1;
  while (num / 10 > 1) {
    num = num / 10;
    count++;
  }
  return count;
};
console.log(countDigits(2345));

// Helper method-- what is the largest number of digits any one number in an array possesses? Uses countDigits helpers

const maxDigits = arr => {
  let max = 1;
  for (let e of arr) {
    max = Math.max(max, countDigits(e));
  }
  return max;
};

console.log(maxDigits([4, 56, 345, 4577, 34567]));

// RADIX sort.
// Accepts an array of integers
// Step 1: find out how many digits the largest number has
// Step 2: loop from i=0 up to this number of digits
// Step 3: in each iteration, make another loop that creates an array for each digit 0-9, and places each number in the array that matches the number in that place
// Step 4: readd all elements to array as they occur in subarrays (ie, just concat all subarrays)
// Do this until outer loop is finished, then return array

const radix = arr => {
  const maxDigit = maxDigits(arr);
  for (let i = 1; i <= maxDigit; i++) {
    // BAD LINE -- this line fills buckets with ten copies of the same blank array. They all reference once array.
    // let buckets = new Array(10).fill([]);
    // for whatever reason, Array.from will create 10 unique blank arrays
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j of arr) {
      let digValue = getDigit(j, i);
      buckets[digValue].push(j);
    }
    arr = buckets.flat();
  }
  return arr;
};

console.log(radix([33, 2, 546, 133, 1235]));
