// Write a function that, given:

//     an amount of money
//     an array of coin denominations

// computes the number of ways to make the amount of money with coins of the available denominations.

const makeChange = (amount, denominations) => {
  // calculate how to make every amount up to sought amount. Need to initialize array at 0 so we can add to each index
  const waysOfMakingNCents = new Array(amount + 1).fill(0);
  waysOfMakingNCents[0] = 1; //only one way to make zero cents

  for (let coin of denominations) {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfMakingNCents[higherAmount] +=
        waysOfMakingNCents[higherAmountRemainder];
    }
    console.log(waysOfMakingNCents);
  }

  return waysOfMakingNCents[amount];
};

console.log(makeChange(89, [1, 5, 10, 25]));
