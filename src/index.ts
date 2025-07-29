// Export types
export type { CurrencyDenomination, CurrencyDenominations, CurrencyCode } from './types';

// Export data
export { currencyDenominations } from './data';

// Export API functions
export {
  getDenominations,
  getNotes,
  getCoins,
  getSupportedCurrencies,
  hasDenominations,
  getAllDenominations,
  getCurrenciesWithNotes,
  getCurrenciesWithCoins,
  getHighestNote,
  getLowestNote,
  getHighestCoin,
  getLowestCoin
} from './api';