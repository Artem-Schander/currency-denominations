import { currencyDenominations } from '../src/data';
import { CurrencyDenominations } from '../src/types';

describe('Data Integrity Tests', () => {
  describe('Currency Code Validation', () => {
    test('all currency codes should be 3 characters long', () => {
      const currencyCodes = Object.keys(currencyDenominations);
      
      currencyCodes.forEach(code => {
        expect(code.length).toBe(3);
      });
    });

    test('all currency codes should be uppercase', () => {
      const currencyCodes = Object.keys(currencyDenominations);
      
      currencyCodes.forEach(code => {
        expect(code).toBe(code.toUpperCase());
      });
    });

    test('all currency codes should contain only letters', () => {
      const currencyCodes = Object.keys(currencyDenominations);
      const letterOnlyRegex = /^[A-Z]{3}$/;
      
      currencyCodes.forEach(code => {
        expect(letterOnlyRegex.test(code)).toBe(true);
      });
    });

    test('should not have duplicate currency codes', () => {
      const currencyCodes = Object.keys(currencyDenominations);
      const uniqueCodes = new Set(currencyCodes);
      
      expect(currencyCodes.length).toBe(uniqueCodes.size);
    });
  });

  describe('Denomination Data Structure Validation', () => {
    test('each currency should have notes and coins properties', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        expect(denomination).toHaveProperty('notes');
        expect(denomination).toHaveProperty('coins');
        expect(Array.isArray(denomination.notes)).toBe(true);
        expect(Array.isArray(denomination.coins)).toBe(true);
      });
    });

    test('notes and coins should contain only numbers', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        denomination.notes.forEach(note => {
          expect(typeof note).toBe('number');
          expect(Number.isFinite(note)).toBe(true);
        });
        
        denomination.coins.forEach(coin => {
          expect(typeof coin).toBe('number');
          expect(Number.isFinite(coin)).toBe(true);
        });
      });
    });

    test('no denomination should be negative', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        denomination.notes.forEach(note => {
          expect(note).toBeGreaterThan(0);
        });
        
        denomination.coins.forEach(coin => {
          expect(coin).toBeGreaterThan(0);
        });
      });
    });

    test('notes should be sorted in ascending order', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        if (denomination.notes.length > 1) {
          const sortedNotes = [...denomination.notes].sort((a, b) => a - b);
          expect(denomination.notes).toEqual(sortedNotes);
        }
      });
    });

    test('coins should be sorted in ascending order', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        if (denomination.coins.length > 1) {
          const sortedCoins = [...denomination.coins].sort((a, b) => a - b);
          expect(denomination.coins).toEqual(sortedCoins);
        }
      });
    });

    test('should not have duplicate denominations within notes', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        const uniqueNotes = new Set(denomination.notes);
        expect(denomination.notes.length).toBe(uniqueNotes.size);
      });
    });

    test('should not have duplicate denominations within coins', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        const uniqueCoins = new Set(denomination.coins);
        expect(denomination.coins.length).toBe(uniqueCoins.size);
      });
    });
  });

  describe('Currency Coverage Tests', () => {
    test('should include all major world currencies', () => {
      const majorCurrencies = [
        'USD', // US Dollar
        'EUR', // Euro
        'GBP', // Pound Sterling
        'JPY', // Japanese Yen
        'CNY', // Yuan Renminbi
        'AUD', // Australian Dollar
        'CAD', // Canadian Dollar
        'CHF', // Swiss Franc
        'SEK', // Swedish Krona
        'NOK', // Norwegian Krone
        'DKK', // Danish Krone
        'HKD', // Hong Kong Dollar
        'SGD', // Singapore Dollar
        'NZD', // New Zealand Dollar
        'ZAR', // South African Rand
        'BRL', // Brazilian Real
        'RUB', // Russian Ruble
        'INR', // Indian Rupee
        'KRW', // Korean Won
        'MXN', // Mexican Peso
        'PLN', // Polish Zloty
        'TRY', // Turkish Lira
        'AED', // UAE Dirham
        'SAR', // Saudi Riyal
        'QAR', // Qatari Rial
        'THB', // Thai Baht
        'MYR', // Malaysian Ringgit
        'IDR', // Indonesian Rupiah
        'PHP', // Philippine Peso
        'VND', // Vietnamese Dong
        'EGP'  // Egyptian Pound
      ];

      majorCurrencies.forEach(currency => {
        expect(currencyDenominations).toHaveProperty(currency);
      });
    });

    test('should include special and test currencies', () => {
      const specialCurrencies = [
        'XUA', // ADB Unit of Account
        'XBA', 'XBB', 'XBC', 'XBD', // Bond Markets Units
        'XTS', // Test currency
        'XDR', // Special Drawing Rights
        'XAU', // Gold
        'XAG', // Silver
        'XPD', // Palladium
        'XPT', // Platinum
        'XSU', // Sucre
        'XXX'  // No currency
      ];

      specialCurrencies.forEach(currency => {
        expect(currencyDenominations).toHaveProperty(currency);
      });
    });

    test('should include regional currency unions', () => {
      const regionalCurrencies = [
        'XOF', // West African CFA Franc
        'XAF', // Central African CFA Franc
        'XPF', // CFP Franc
        'XCD'  // East Caribbean Dollar
      ];

      regionalCurrencies.forEach(currency => {
        expect(currencyDenominations).toHaveProperty(currency);
      });
    });

    test('should include replaced currencies with historical context', () => {
      const replacedCurrencies = [
        'VEF', // Replaced by VES
        'STD', // Replaced by STN
        'MRO', // Replaced by MRU
        'ZWL'  // No longer in active use
      ];

      replacedCurrencies.forEach(currency => {
        expect(currencyDenominations).toHaveProperty(currency);
        // Replaced currencies should have empty denominations
        expect(currencyDenominations[currency].notes).toEqual([]);
        expect(currencyDenominations[currency].coins).toEqual([]);
      });
    });

    test('should have substantial currency coverage', () => {
      const totalCurrencies = Object.keys(currencyDenominations).length;
      expect(totalCurrencies).toBeGreaterThanOrEqual(170); // Should have at least 170 currencies
    });
  });

  describe('Data Quality Tests', () => {
    test('major currencies should have reasonable denomination counts', () => {
      const majorCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY'];
      
      majorCurrencies.forEach(currency => {
        const denomination = currencyDenominations[currency];
        
        // Major currencies should have at least some notes
        expect(denomination.notes.length).toBeGreaterThan(0);
        
        // Most major currencies have coins (some exceptions like JPY might have different patterns)
        if (currency !== 'JPY') { // JPY coins start from 1, no fractional coins
          expect(denomination.coins.length).toBeGreaterThan(0);
        }
      });
    });

    test('special commodity currencies should have empty denominations', () => {
      const commodityCurrencies = ['XAU', 'XAG', 'XPD', 'XPT'];
      
      commodityCurrencies.forEach(currency => {
        const denomination = currencyDenominations[currency];
        expect(denomination.notes).toEqual([]);
        expect(denomination.coins).toEqual([]);
      });
    });

    test('test currencies should have empty denominations', () => {
      const testCurrencies = ['XTS', 'XXX'];
      
      testCurrencies.forEach(currency => {
        const denomination = currencyDenominations[currency];
        expect(denomination.notes).toEqual([]);
        expect(denomination.coins).toEqual([]);
      });
    });

    test('USD denominations should match known values', () => {
      const usd = currencyDenominations.USD;
      expect(usd.notes).toEqual([1, 2, 5, 10, 20, 50, 100]);
      expect(usd.coins).toEqual([0.01, 0.05, 0.1, 0.25]);
    });

    test('EUR denominations should match known values', () => {
      const eur = currencyDenominations.EUR;
      expect(eur.notes).toEqual([5, 10, 20, 50, 100, 200, 500]);
      expect(eur.coins).toEqual([0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]);
    });

    test('GBP denominations should match known values', () => {
      const gbp = currencyDenominations.GBP;
      expect(gbp.notes).toEqual([5, 10, 20, 50]);
      expect(gbp.coins).toEqual([0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]);
    });
  });

  describe('Data Consistency Tests', () => {
    test('data structure should be consistent with TypeScript interface', () => {
      // This test ensures the runtime data matches the TypeScript interface
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        // Should have exactly two properties
        const keys = Object.keys(denomination);
        expect(keys).toContain('notes');
        expect(keys).toContain('coins');
        expect(keys.length).toBe(2);
      });
    });

    test('should not have any null or undefined values', () => {
      Object.entries(currencyDenominations).forEach(([code, denomination]) => {
        expect(denomination).not.toBeNull();
        expect(denomination).not.toBeUndefined();
        expect(denomination.notes).not.toBeNull();
        expect(denomination.notes).not.toBeUndefined();
        expect(denomination.coins).not.toBeNull();
        expect(denomination.coins).not.toBeUndefined();
      });
    });
  });
});