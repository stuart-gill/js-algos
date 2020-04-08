//  I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

const easyWords = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];

// try a version of binary search
// compare middle element to first element
// if middle element is greater than first, rotation is to the right
// if middle element if less than first, rotation is to the left
// what is the base case? base case is when e-1 is higher

function sortWords(arr, start = 0, stop = arr.length) {
  let middle = Math.floor((stop - start) / 2);
  if (arr[middle] < arr[middle - 1]) {
    console.log(`pivot index is: ${middle}`);
    return middle;
  }
  if (arr[middle] > arr[0]) {
    sortWords(arr, middle, stop);
  } else sortWords(arr, 0, middle);
}
sortWords(easyWords);
sortWords(words);
