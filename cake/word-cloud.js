//  You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

const input = 'After beating the eggs, Dana read the next step:';
const input2 =
  "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.";
function alphaCheck(char) {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
}

// cycle through every character. if it's alphanumeric, add it to the word. if its not, add word to map, if word exists
// could add conditionals to include apostrophized words and hypenated words as single words
// in that case, for of loop would have to become a for loop so you could check several elements ahead

function wordCloud(input) {
  let lowered = input.toLowerCase();
  let frequencyMap = new Map();

  let word = '';
  for (let e of lowered) {
    if (alphaCheck(e)) {
      word += e;
    } else if (frequencyMap[word]) {
      frequencyMap[word]++;
      word = '';
    } else if (word != '') {
      frequencyMap[word] = 1;
      word = '';
    }
  }

  console.log(frequencyMap);
}

wordCloud(input);
wordCloud(input2);
