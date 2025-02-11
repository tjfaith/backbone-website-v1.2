import { exchangeRates } from ".";

export const currencyConverter = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
) => {
  if (!fromCurrency || !toCurrency) {
    return 0;
  }
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    return 0;
  }

  // Convert to USD first, then to the target currency
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  return convertedAmount;
};

// Example usage
// console.log(`₦1000 to USD: $${currencyConverter(1000, "NGN", "USD")}`);
// console.log(`$10 to NGN: ₦${currencyConverter(10, "USD", "NGN")}`);
// console.log(`€50 to GBP: £${currencyConverter(50, "EUR", "GBP")}`);
