// check for duplicates. Function can be passed unlimited arguments (strings or numbers only)
// return true or false
// use ...args to allow for unlimited arguments

// naieve solution would be nested loops. For each element, check all other elements.
// instead, use a frequency counter to iterate instances of elements. Return true and break at first duplicate.
// should be O(n) time complexity
function areThereDuplicates(...args) {
  let counter = {};
  for (let e of args) {
    if (counter[e]) {
      return true;
    } else counter[e] = 1;
  }
  return false;
}

let ans1 = areThereDuplicates(1, 2, 3, 4, 5, 'a', 'a');
let ans2 = areThereDuplicates(1, 2, 3, 4, 5, 'a');
console.log([ans1, ans2]);
