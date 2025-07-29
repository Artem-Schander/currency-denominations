import { currencyDenominations } from './data';
import { CurrencyDenomination, CurrencyDenominations, CurrencyCode } from './types';

/**
 * Get all denominations (notes and coins) for a specific currency
 * @param currencyCode - The three-letter currency code (e.g., 'USD', 'EUR')
 * @returns The currency denomination data or null if not found
 */
export function getDenominations(currencyCode: CurrencyCode): CurrencyDenomination | null {
  if (!currencyCode || typeof currencyCode !== 'string') {
    return null;
  }
  const code = currencyCode.trim().toUpperCase();
  return currencyDenominations[code] || null;
}

/**
 * Get only banknotes for a specific currency
 * @param currencyCode - The three-letter currency code
 * @returns Array of banknote values or empty array if currency not found
 */
export function getNotes(currencyCode: CurrencyCode): number[] {
  const denomination = getDenominations(currencyCode);
  return denomination ? denomination.notes : [];
}

/**
 * Get only coins for a specific currency
 * @param currencyCode - The three-letter currency code
 * @returns Array of coin values or empty array if currency not found
 */
export function getCoins(currencyCode: CurrencyCode): number[] {
  const denomination = getDenominations(currencyCode);
  return denomination ? denomination.coins : [];
}

/**
 * Get a list of all supported currency codes
 * @returns Array of supported currency codes
 */
export function getSupportedCurrencies(): CurrencyCode[] {
  return Object.keys(currencyDenominations).sort();
}

/**
 * Check if a currency has denomination data available
 * @param currencyCode - The three-letter currency code
 * @returns True if the currency is supported, false otherwise
 */
export function hasDenominations(currencyCode: CurrencyCode): boolean {
  if (!currencyCode || typeof currencyCode !== 'string') {
    return false;
  }
  const code = currencyCode.trim().toUpperCase();
  return code in currencyDenominations;
}

/**
 * Get the complete denominations dataset
 * @returns The complete currency denominations object
 */
export function getAllDenominations(): CurrencyDenominations {
  return { ...currencyDenominations };
}

/**
 * Get currencies that have banknotes
 * @returns Array of currency codes that have banknotes
 */
export function getCurrenciesWithNotes(): CurrencyCode[] {
  return Object.keys(currencyDenominations)
    .filter(code => currencyDenominations[code].notes.length > 0)
    .sort();
}

/**
 * Get currencies that have coins
 * @returns Array of currency codes that have coins
 */
export function getCurrenciesWithCoins(): CurrencyCode[] {
  return Object.keys(currencyDenominations)
    .filter(code => currencyDenominations[code].coins.length > 0)
    .sort();
}

/**
 * Get the highest denomination note for a currency
 * @param currencyCode - The three-letter currency code
 * @returns The highest note value or null if no notes exist
 */
export function getHighestNote(currencyCode: CurrencyCode): number | null {
  const notes = getNotes(currencyCode);
  return notes.length > 0 ? Math.max(...notes) : null;
}

/**
 * Get the lowest denomination note for a currency
 * @param currencyCode - The three-letter currency code
 * @returns The lowest note value or null if no notes exist
 */
export function getLowestNote(currencyCode: CurrencyCode): number | null {
  const notes = getNotes(currencyCode);
  return notes.length > 0 ? Math.min(...notes) : null;
}

/**
 * Get the highest denomination coin for a currency
 * @param currencyCode - The three-letter currency code
 * @returns The highest coin value or null if no coins exist
 */
export function getHighestCoin(currencyCode: CurrencyCode): number | null {
  const coins = getCoins(currencyCode);
  return coins.length > 0 ? Math.max(...coins) : null;
}

/**
 * Get the lowest denomination coin for a currency
 * @param currencyCode - The three-letter currency code
 * @returns The lowest coin value or null if no coins exist
 */
export function getLowestCoin(currencyCode: CurrencyCode): number | null {
  const coins = getCoins(currencyCode);
  return coins.length > 0 ? Math.min(...coins) : null;
}