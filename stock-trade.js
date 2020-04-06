// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
// Stock prices are listed in array in chronological order
// trades must occur-- if stock drops all day, find lowest possible loss

const stockPrices = [32, 10, 7, 5, 2, 45];

function getMaxProfit(prices) {
  let currentLow = prices[0];
  // initialize current best to be difference between first and second prices, even if that's negative
  let currentBest = prices[1] - prices[0];
  for (let i = 1; i < prices.length; i++) {
    // reset current low if current element is less
    if (prices[i] < currentLow) currentLow = prices[i];
    // check diff between current price and running low price, and set it to currentBest if this difference is higher
    if (prices[i] - currentLow > currentBest) {
      currentBest = prices[i] - currentLow;
    }
  }
  console.log(`current best: ${currentBest}`);
  return currentBest;
}

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

// I initially set this one up to build arrays storing running highest and lowest amounts, but wasn't necessary given that you're only looking for the max intra-day delta
