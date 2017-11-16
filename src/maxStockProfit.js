const maxStockProfit = prices => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) buyPrice = prices[i];
    sellPrice = prices[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      const tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
};

module.exports = maxStockProfit;
