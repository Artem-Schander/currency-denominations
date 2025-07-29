# currency-denominations

[![npm version](https://badge.fury.io/js/currency-denominations.svg)](https://badge.fury.io/js/currency-denominations)
[![CI/CD Pipeline](https://github.com/Artem-Schander/currency-denominations/actions/workflows/ci.yml/badge.svg)](https://github.com/Artem-Schander/currency-denominations/actions/workflows/ci.yml)
[![NPM Publishing](https://github.com/Artem-Schander/currency-denominations/actions/workflows/publish.yml/badge.svg)](https://github.com/Artem-Schander/currency-denominations/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/Artem-Schander/currency-denominations/branch/main/graph/badge.svg)](https://codecov.io/gh/Artem-Schander/currency-denominations)

A comprehensive package providing information about banknotes and coins for all world currencies.

## Installation

```bash
npm install currency-denominations
```

## Features

- 📊 **Comprehensive Data**: Includes denomination data for 173+ currencies
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
console.log(currencies.length); // 173
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
// Get all supported currencies
const currencies = getSupportedCurrencies();
// Returns: ['AED', 'AFN', 'ALL', 'AMD', ...]
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

The package includes denomination data for 173+ currencies, including:

- **Major Currencies**: USD, EUR, GBP, JPY, CHF, CAD, AUD, etc.
- **Developing Markets**: AFN, AMD, AOA, AWG, AZN, BDT, etc.
- **Special Currencies**: XOF, XAF, XPF (regional currencies)
- **Commodity Currencies**: XAU (Gold), XAG (Silver), XPD (Palladium)
- **Special Drawing Rights**: XDR
- **Test Currencies**: XTS, XXX

### Currency Examples

```javascript
// US Dollar
getDenominations('USD');
// { notes: [1, 2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] }

// Euro
getDenominations('EUR');
// { notes: [5, 10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }

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

## Testing

The package includes a comprehensive test suite with 100% code coverage:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode (for development)
npm run test:watch

# Run tests for CI (with JUnit output)
npm run test:ci

# Run legacy test script
npm run test:legacy
```

### Test Coverage

- **API Functions**: Complete testing of all public API functions with edge cases
- **Data Integrity**: Validation of all currency data for consistency and correctness
- **TypeScript Compliance**: Ensures proper type definitions and exports
- **Integration Tests**: End-to-end workflow testing and error handling
- **Performance Tests**: Basic performance validation for large datasets

The test suite validates:
- 173+ currencies with proper denomination data
- All major world currencies (USD, EUR, GBP, JPY, etc.)
- Special currencies (XAU, XAG, XDR, etc.)
- Regional currency unions (XOF, XAF, XPF, XCD)
- Data format consistency and sorting
- Proper error handling for invalid inputs

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for:

- Additional currency data
- Bug fixes
- Documentation improvements
- New utility functions

### Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm ci`
3. Run tests: `npm test`
4. Build the project: `npm run build`

### Release Process

This project uses automated publishing via GitHub Actions:

#### For Maintainers

1. **Create a Release**: 
   - Push a version tag: `git tag v1.0.0 && git push origin v1.0.0`
   - This triggers the Release workflow which creates a GitHub release

2. **Publish to NPM**:
   - Publishing a GitHub release automatically triggers the NPM Publishing workflow
   - The package is published to npm with provenance for security

#### Automated Workflows

- **CI/CD Pipeline** (`ci.yml`): Runs on every push/PR
  - Tests on Node.js 18.x, 20.x, 22.x
  - Type checking with TypeScript
  - 100% test coverage validation
  - Build verification
  - Security auditing

- **Release Workflow** (`release.yml`): Triggered by version tags
  - Builds and tests the package
  - Generates release notes from commit history
  - Creates GitHub release with build artifacts
  - Includes checksums for security

- **NPM Publishing** (`publish.yml`): Triggered by GitHub releases
  - Full test suite validation
  - TypeScript compilation
  - Publishes to npm with provenance
  - Secure publishing with automation tokens

#### Security Features

- ✅ **Provenance**: All npm packages include attestations
- ✅ **Clean Builds**: Validates working directory before publishing
- ✅ **Test Coverage**: 100% coverage requirement
- ✅ **Type Safety**: Full TypeScript validation
- ✅ **Security Audits**: Automated dependency vulnerability scanning

## License

MIT License - see LICENSE file for details.

## Changelog

### 0.0.1
- Complete world currency coverage with 173+ currencies
- Support for all major currencies (USD, EUR, GBP, JPY, CHF, CAD, AUD, etc.)
- Comprehensive denomination data for banknotes and coins
- Full TypeScript definitions
- ES modules and CommonJS support
- Complete API with utility functions
- **NEW**: Comprehensive Jest testing framework with 100% code coverage
- **NEW**: Data integrity validation and quality assurance tests
- **NEW**: CI/CD workflow with GitHub Actions
- **NEW**: Enhanced error handling for edge cases
