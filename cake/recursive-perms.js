// Write a recursive function for generating all permutations of an input string. Return them as a set.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.

// This one is confusing as fuck. Having a hard time understanding how the Set is maintained through recursion

function getPermutations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set(string);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string.slice(-1);

  // Recursive call: get all possible permutations for all chars except last
  // This winds up the recursion until we have base case, where the Set is just {'h'}
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // Then we unwind the recursion
  // Put the last char in all possible positions for each of the above permutations
  console.log(allCharsExceptLast);
  console.log(permutationsOfAllCharsExceptLast);

  const permutations = new Set();

  for (let permOfCharsExceptLast of permutationsOfAllCharsExceptLast) {
    for (let i = 0; i <= allCharsExceptLast.length; i++) {
      const permutation =
        permOfCharsExceptLast.slice(0, i) +
        lastChar +
        permOfCharsExceptLast.slice(i);
      permutations.add(permutation);
    }
  }
  console.log(permutations);
  // returning permutations kicks back processed permutations to permutationsOfAllCharsExceptLast
  return permutations;
}

console.log(getPermutations('hairy'));
