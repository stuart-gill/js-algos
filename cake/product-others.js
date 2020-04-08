//  You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// Here's the catch: You can't use division in your solution!

const input = [3, 1, 2, 5, 6, 4];

function getProducts(arr) {
  // build array of products of numbers before each index. Starts with one, goes up from there
  let beforeIndex = [1];
  for (let i = 0; i < input.length - 1; i++) {
    beforeIndex.push(beforeIndex[i] * input[i]);
  }
  // build array of products of numbers after each index. Start with one from the end and work backwards by unshifting
  // need to work from end so you're multiplying by one extra number each time
  let afterIndex = [1];
  for (let i = input.length - 1; i > 0; i--) {
    afterIndex.unshift(afterIndex[0] * input[i]);
  }
  let products = [];
  for (let i = 0; i < input.length; i++) {
    products.push(beforeIndex[i] * afterIndex[i]);
  }

  console.log(products);
}

// trimmed down version, harder to read I think but uses one array instead of three
function getProductsOneArray(arr) {
  let runningProduct = 1;
  let products = [];
  // build forward "before" array, similar to before but using running product instead of multiplying by previous element
  for (let i = 0; i < input.length; i++) {
    products.push(runningProduct);
    runningProduct *= arr[i];
  }

  // find backwards "After" array elements, but rather than storing in array, store the product of "after" element and "before" element, which is the sought after answer
  runningProduct = 1;
  for (let i = input.length - 1; i >= 0; i--) {
    products[i] = runningProduct * products[i];
    runningProduct *= arr[i];
  }

  console.log(products);
}

getProducts(input);
getProductsOneArray(input);

//   [84, 12, 28, 21]
