// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l',
];

function reverse(inputArray, start, end) {
  let complementaryIndex;
  // only loop through half the array, otherwise you'd reverse twice and end up back forward again
  for (let i = start; i - start < (end - start) / 2; i++) {
    // set complementary index
    complementaryIndex = end - i + start;
    // swap element with its complementary element, same length from end as from front
    [inputArray[i], inputArray[complementaryIndex]] = [
      inputArray[complementaryIndex],
      inputArray[i],
    ];
  }
  console.log(inputArray);
  // return inputArray;
}

function reverseWords(message) {
  // use temp variables to hold words being moved?
  // count number of words first?
  // reverse all chars and then reverse all chars in each word to get them forward again? yes!!
  // just modified old reverse array function to take start and end indices
  let reversed = reverse(message, 0, message.length - 1);
  let start = 0;
  let end = 0;
  for (let i = 0; i < message.length; i++) {
    // separate conditions for if you hit space, or if you're at the last character in the array
    if (message[i] === ' ') {
      end = i - 1;
      console.log(`ran with i=${i}, start=${start} and end=${end}`);
      reverse(message, start, end);
      start = i + 1;
    }
    if (i === message.length - 1) {
      end = i;
      reverse(message, start, end);
    }
  }
  console.log(reversed);
}

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
