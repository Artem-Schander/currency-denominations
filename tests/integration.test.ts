import * as CurrencyModule from '../src/index';
import { CurrencyDenomination, CurrencyDenominations, CurrencyCode } from '../src/types';

describe('Integration Tests', () => {
  describe('Module Exports', () => {
    test('should export all expected functions', () => {
      expect(typeof CurrencyModule.getDenominations).toBe('function');
      expect(typeof CurrencyModule.getNotes).toBe('function');
      expect(typeof CurrencyModule.getCoins).toBe('function');
      expect(typeof CurrencyModule.getSupportedCurrencies).toBe('function');
      expect(typeof CurrencyModule.hasDenominations).toBe('function');
      expect(typeof CurrencyModule.getAllDenominations).toBe('function');
      expect(typeof CurrencyModule.getCurrenciesWithNotes).toBe('function');
      expect(typeof CurrencyModule.getCurrenciesWithCoins).toBe('function');
      expect(typeof CurrencyModule.getHighestNote).toBe('function');
      expect(typeof CurrencyModule.getLowestNote).toBe('function');
      expect(typeof CurrencyModule.getHighestCoin).toBe('function');
      expect(typeof CurrencyModule.getLowestCoin).toBe('function');
    });

    test('should export data object', () => {
      expect(typeof CurrencyModule.currencyDenominations).toBe('object');
      expect(CurrencyModule.currencyDenominations).not.toBeNull();
    });

    test('should export TypeScript types (compilation test)', () => {
      // This test ensures TypeScript types are properly exported
      // If this compiles without errors, the types are correctly defined
      const denomination: CurrencyDenomination = { notes: [1, 2, 5], coins: [0.01, 0.05] };
      const denominations: CurrencyDenominations = { USD: denomination };
      const code: CurrencyCode = 'USD';
      
      expect(denomination).toBeDefined();
      expect(denominations).toBeDefined();
      expect(code).toBeDefined();
    });
  });

  describe('Complete Workflow Scenarios', () => {
    test('should handle complete currency information retrieval workflow', () => {
      // Get list of supported currencies
      const currencies = CurrencyModule.getSupportedCurrencies();
      expect(currencies.length).toBeGreaterThan(0);
      
      // Check if a major currency is supported
      expect(currencies).toContain('USD');
      
      // Get denomination data for USD
      const usdData = CurrencyModule.getDenominations('USD');
      expect(usdData).not.toBeNull();
      
      // Get notes and coins separately
      const notes = CurrencyModule.getNotes('USD');
      const coins = CurrencyModule.getCoins('USD');
      
      // Verify consistency
      expect(notes).toEqual(usdData!.notes);
      expect(coins).toEqual(usdData!.coins);
      
      // Get highest and lowest denominations
      const highestNote = CurrencyModule.getHighestNote('USD');
      const lowestNote = CurrencyModule.getLowestNote('USD');
      const highestCoin = CurrencyModule.getHighestCoin('USD');
      const lowestCoin = CurrencyModule.getLowestCoin('USD');
      
      expect(highestNote).toBe(Math.max(...notes));
      expect(lowestNote).toBe(Math.min(...notes));
      expect(highestCoin).toBe(Math.max(...coins));
      expect(lowestCoin).toBe(Math.min(...coins));
    });

    test('should handle edge cases gracefully', () => {
      // Test with invalid currency
      expect(CurrencyModule.hasDenominations('INVALID')).toBe(false);
      expect(CurrencyModule.getDenominations('INVALID')).toBeNull();
      expect(CurrencyModule.getNotes('INVALID')).toEqual([]);
      expect(CurrencyModule.getCoins('INVALID')).toEqual([]);
      expect(CurrencyModule.getHighestNote('INVALID')).toBeNull();
      expect(CurrencyModule.getLowestNote('INVALID')).toBeNull();
      expect(CurrencyModule.getHighestCoin('INVALID')).toBeNull();
      expect(CurrencyModule.getLowestCoin('INVALID')).toBeNull();
      
      // Test with special currency (no denominations)
      expect(CurrencyModule.hasDenominations('XAU')).toBe(true);
      const goldData = CurrencyModule.getDenominations('XAU');
      expect(goldData).not.toBeNull();
      expect(goldData!.notes).toEqual([]);
      expect(goldData!.coins).toEqual([]);
      expect(CurrencyModule.getHighestNote('XAU')).toBeNull();
      expect(CurrencyModule.getLowestNote('XAU')).toBeNull();
      expect(CurrencyModule.getHighestCoin('XAU')).toBeNull();
      expect(CurrencyModule.getLowestCoin('XAU')).toBeNull();
    });

    test('should provide consistent data across different access methods', () => {
      const allData = CurrencyModule.getAllDenominations();
      const supportedCurrencies = CurrencyModule.getSupportedCurrencies();
      
      // Every supported currency should be in the all data
      supportedCurrencies.forEach(currency => {
        expect(allData).toHaveProperty(currency);
        
        // Data should be consistent between direct access and function calls
        const directData = allData[currency];
        const functionData = CurrencyModule.getDenominations(currency);
        
        expect(directData).toEqual(functionData);
      });
    });

    test('should handle filtering functions correctly', () => {
      const currenciesWithNotes = CurrencyModule.getCurrenciesWithNotes();
      const currenciesWithCoins = CurrencyModule.getCurrenciesWithCoins();
      
      // Test that currencies with notes actually have notes
      currenciesWithNotes.forEach(currency => {
        const notes = CurrencyModule.getNotes(currency);
        expect(notes.length).toBeGreaterThan(0);
      });
      
      // Test that currencies with coins actually have coins
      currenciesWithCoins.forEach(currency => {
        const coins = CurrencyModule.getCoins(currency);
        expect(coins.length).toBeGreaterThan(0);
      });
      
      // Test that special currencies are properly excluded
      expect(currenciesWithNotes).not.toContain('XAU'); // Gold
      expect(currenciesWithCoins).not.toContain('XAU'); // Gold
    });
  });

  describe('Error Handling', () => {
    test('should handle various invalid inputs gracefully', () => {
      const invalidInputs = [
        '',
        '  ',
        'US',
        'USDD',
        'us',
        '123',
        'USD ',
        ' USD',
        null as any,
        undefined as any,
        123 as any,
        {} as any,
        [] as any
      ];

      invalidInputs.forEach(input => {
        expect(() => CurrencyModule.hasDenominations(input)).not.toThrow();
        expect(() => CurrencyModule.getDenominations(input)).not.toThrow();
        expect(() => CurrencyModule.getNotes(input)).not.toThrow();
        expect(() => CurrencyModule.getCoins(input)).not.toThrow();
        expect(() => CurrencyModule.getHighestNote(input)).not.toThrow();
        expect(() => CurrencyModule.getLowestNote(input)).not.toThrow();
        expect(() => CurrencyModule.getHighestCoin(input)).not.toThrow();
        expect(() => CurrencyModule.getLowestCoin(input)).not.toThrow();
      });
    });

    test('should return consistent falsy values for invalid inputs', () => {
      const invalidInputs = ['', '  ', 'INVALID', null, undefined];

      invalidInputs.forEach(input => {
        if (input !== null && input !== undefined) {
          expect(CurrencyModule.hasDenominations(input as string)).toBe(false);
          expect(CurrencyModule.getDenominations(input as string)).toBeNull();
          expect(CurrencyModule.getNotes(input as string)).toEqual([]);
          expect(CurrencyModule.getCoins(input as string)).toEqual([]);
          expect(CurrencyModule.getHighestNote(input as string)).toBeNull();
          expect(CurrencyModule.getLowestNote(input as string)).toBeNull();
          expect(CurrencyModule.getHighestCoin(input as string)).toBeNull();
          expect(CurrencyModule.getLowestCoin(input as string)).toBeNull();
        }
      });
    });
  });

  describe('Performance Tests', () => {
    test('should handle large number of queries efficiently', () => {
      const currencies = CurrencyModule.getSupportedCurrencies();
      
      const startTime = Date.now();
      
      // Perform many operations
      for (let i = 0; i < 1000; i++) {
        const randomCurrency = currencies[i % currencies.length];
        CurrencyModule.getDenominations(randomCurrency);
        CurrencyModule.getNotes(randomCurrency);
        CurrencyModule.getCoins(randomCurrency);
        CurrencyModule.hasDenominations(randomCurrency);
      }
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      // Should complete 4000 operations in reasonable time (less than 1 second)
      expect(duration).toBeLessThan(1000);
    });

    test('should handle getAllDenominations efficiently', () => {
      const startTime = Date.now();
      
      // Call multiple times to test performance
      for (let i = 0; i < 100; i++) {
        CurrencyModule.getAllDenominations();
      }
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      // Should complete 100 operations in reasonable time
      expect(duration).toBeLessThan(500);
    });
  });
});