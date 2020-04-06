// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
// Stock prices are listed in array in chronological order

const stockPrices = [32, 10, 7, 5, 8, 11, 9, 27, 2];

function getMaxProfit(prices) {
  let lows = [prices[0]];
  let currentLow = prices[0];
  let currentBest = prices[1] - prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < currentLow) currentLow = prices[i];
    lows.push(currentLow);
    if (prices[i] - lows[i - 1] > currentBest) {
      currentBest = prices[i] - lows[i - 1];
    }
  }
  console.log(`lows: ${lows}`);
  console.log(`current best: ${currentBest}`);
  return currentBest;
}

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
