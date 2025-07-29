# currency-denominations

A comprehensive package providing information about banknotes and coins for all world currencies.

## Installation

```bash
npm install currency-denominations
```

## Features

- 📊 **Comprehensive Data**: Includes denomination data for 105+ currencies
- 🔍 **Easy Lookup**: Simple API to get banknotes and coins for any currency
- 📝 **TypeScript Support**: Full TypeScript definitions included
- 🔄 **Multiple Formats**: Supports both ES modules and CommonJS
- 🚀 **Zero Dependencies**: Lightweight with no external dependencies
- ✅ **Well Tested**: Thoroughly tested with comprehensive coverage

## Usage

### ES Modules (Recommended)

```javascript
import { 
  getDenominations, 
  getNotes, 
  getCoins, 
  getSupportedCurrencies,
  hasDenominations 
} from 'currency-denominations';

// Get all denominations for a currency
const usdData = getDenominations('USD');
console.log(usdData); // { notes: [1, 2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] }

// Get only banknotes
const eurNotes = getNotes('EUR');
console.log(eurNotes); // [5, 10, 20, 50, 100, 200, 500]

// Get only coins
const eurCoins = getCoins('EUR');
console.log(eurCoins); // [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]

// Check if currency is supported
const isSupported = hasDenominations('AFN');
console.log(isSupported); // true

// Get all supported currencies
const currencies = getSupportedCurrencies();
console.log(currencies.length); // 105+
```

### CommonJS

```javascript
const { 
  getDenominations, 
  getNotes, 
  getCoins, 
  getSupportedCurrencies 
} = require('currency-denominations');

// Same usage as above
const afnData = getDenominations('AFN');
console.log(afnData); // { notes: [1, 2, 5, 10, 20, 50, 100, 500, 1000], coins: [1, 2, 5] }
```

## API Reference

### Core Functions

#### `getDenominations(currencyCode: string)`
Returns the complete denomination data for a currency.

**Parameters:**
- `currencyCode` - Three-letter currency code (case-insensitive)

**Returns:**
- `CurrencyDenomination | null` - Object with `notes` and `coins` arrays, or `null` if not found

```javascript
const gbpData = getDenominations('GBP');
// Returns: { notes: [5, 10, 20, 50], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }
```

#### `getNotes(currencyCode: string)`
Returns only the banknote denominations for a currency.

**Parameters:**
- `currencyCode` - Three-letter currency code

**Returns:**
- `number[]` - Array of banknote values

```javascript
const jpyNotes = getNotes('JPY');
// Returns: [1000, 2000, 5000, 10000]
```

#### `getCoins(currencyCode: string)`
Returns only the coin denominations for a currency.

**Parameters:**
- `currencyCode` - Three-letter currency code

**Returns:**
- `number[]` - Array of coin values

```javascript
const jpyCoins = getCoins('JPY');
// Returns: [1, 5, 10, 50, 100, 500]
```

#### `getSupportedCurrencies()`
Returns all supported currency codes.

**Returns:**
- `string[]` - Sorted array of currency codes

```javascript
const currencies = getSupportedCurrencies();
// Returns: ['AFN', 'ALL', 'AMD', 'AOA', ...]
```

#### `hasDenominations(currencyCode: string)`
Checks if denomination data is available for a currency.

**Parameters:**
- `currencyCode` - Three-letter currency code

**Returns:**
- `boolean` - True if supported, false otherwise

```javascript
const hasEur = hasDenominations('EUR');
// Returns: true

const hasXyz = hasDenominations('XYZ');
// Returns: false
```

#### `getAllDenominations()`
Returns the complete dataset of all currency denominations.

**Returns:**
- `CurrencyDenominations` - Complete currency denominations object

### Utility Functions

#### `getCurrenciesWithNotes()`
Returns currencies that have banknotes.

#### `getCurrenciesWithCoins()`
Returns currencies that have coins.

#### `getHighestNote(currencyCode: string)`
Returns the highest banknote value for a currency.

#### `getLowestNote(currencyCode: string)`
Returns the lowest banknote value for a currency.

#### `getHighestCoin(currencyCode: string)`
Returns the highest coin value for a currency.

#### `getLowestCoin(currencyCode: string)`
Returns the lowest coin value for a currency.

## TypeScript Support

The package includes comprehensive TypeScript definitions:

```typescript
import { CurrencyDenomination, CurrencyDenominations, CurrencyCode } from 'currency-denominations';

interface CurrencyDenomination {
  notes: number[];
  coins: number[];
}

interface CurrencyDenominations {
  [currencyCode: string]: CurrencyDenomination;
}

type CurrencyCode = string;
```

## Supported Currencies

The package includes denomination data for 105+ currencies, including:

- **Major Currencies**: USD, EUR, GBP, JPY, CHF, CAD, AUD, etc.
- **Developing Markets**: AFN, AMD, AOA, AWG, AZN, BDT, etc.
- **Special Currencies**: XOF, XAF, XPF (regional currencies)
- **Commodity Currencies**: XAU (Gold), XAG (Silver), XPD (Palladium)
- **Special Drawing Rights**: XDR
- **Test Currencies**: XTS, XXX

### Currency Examples

```javascript
// Afghanistan Afghani
getDenominations('AFN');
// { notes: [1, 2, 5, 10, 20, 50, 100, 500, 1000], coins: [1, 2, 5] }

// West African CFA Franc
getDenominations('XOF');
// { notes: [500, 1000, 2000, 5000, 10000], coins: [5, 10, 25, 50, 100, 200, 250, 500] }

// Special currencies (commodities)
getDenominations('XAU'); // Gold
// { notes: [], coins: [] }
```

## Data Accuracy

The denomination data is based on official currency information and includes:

- Current banknotes and coins in circulation
- Standard denominations for each currency
- Empty arrays for special currencies without physical denominations
- Accurate decimal values for fractional denominations

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for:

- Additional currency data
- Bug fixes
- Documentation improvements
- New utility functions

## License

MIT License - see LICENSE file for details.

## Changelog

### 1.0.0
- Initial release
- Support for 105+ currencies
- Complete TypeScript definitions
- ES modules and CommonJS support
- Comprehensive API with utility functions
