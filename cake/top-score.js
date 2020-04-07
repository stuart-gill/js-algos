//  Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(nlg⁡n)O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

//     an array of unsortedScores
//     the highestPossibleScore in the game

// and returns a sorted array of scores in less than O(nlg⁡n)O(n\lg{n})O(nlgn) time.

// For example:

const unsortedScores = [37, 89, 41, 65, 91, 53, 91];
const HIGHEST_POSSIBLE_SCORE = 100;

function sortScores(scores, highestScore) {
  // initialize array of $highestScore spots with 0s
  let frequency = new Array(highestScore + 1).fill(0);
  // for every score, increment the corresponding array value
  for (let score of scores) {
    frequency[score]++;
  }
  // then, build an array of sorted scores using the frequency array
  // nested for loop so you repeat the score as many times as it occurs, according to the frequency array
  let sortedScores = [];

  for (let i = 0; i <= 100; i++) {
    for (let j = frequency[i]; j > 0; j--) {
      sortedScores.push(i);
    }
  }
  console.log(sortedScores);
}

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
