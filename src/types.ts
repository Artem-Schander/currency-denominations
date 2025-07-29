/**
 * Currency denomination information
 */
export interface CurrencyDenomination {
  /** Array of banknote values */
  notes: number[];
  /** Array of coin values */
  coins: number[];
}

/**
 * Complete currency denominations data structure
 */
export interface CurrencyDenominations {
  [currencyCode: string]: CurrencyDenomination;
}

/**
 * Supported currency codes
 */
export type CurrencyCode = string;