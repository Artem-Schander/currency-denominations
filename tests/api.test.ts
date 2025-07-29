import {
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
} from '../src/api';

describe('API Functions', () => {
  describe('getDenominations', () => {
    test('should return denomination data for valid currency codes', () => {
      const usdData = getDenominations('USD');
      expect(usdData).not.toBeNull();
      expect(usdData).toHaveProperty('notes');
      expect(usdData).toHaveProperty('coins');
      expect(Array.isArray(usdData?.notes)).toBe(true);
      expect(Array.isArray(usdData?.coins)).toBe(true);
    });

    test('should return null for invalid currency codes', () => {
      const invalidData = getDenominations('XYZ');
      expect(invalidData).toBeNull();
    });

    test('should be case insensitive', () => {
      const upperCase = getDenominations('USD');
      const lowerCase = getDenominations('usd');
      const mixedCase = getDenominations('UsDd');
      
      expect(upperCase).toEqual(lowerCase);
      expect(lowerCase).not.toEqual(mixedCase); // UsDd is invalid
    });

    test('should handle empty string input', () => {
      const emptyData = getDenominations('');
      expect(emptyData).toBeNull();
    });
  });

  describe('getNotes', () => {
    test('should return notes array for valid currency', () => {
      const usdNotes = getNotes('USD');
      expect(Array.isArray(usdNotes)).toBe(true);
      expect(usdNotes.length).toBeGreaterThan(0);
      expect(usdNotes).toEqual([1, 2, 5, 10, 20, 50, 100]);
    });

    test('should return empty array for invalid currency', () => {
      const invalidNotes = getNotes('XYZ');
      expect(Array.isArray(invalidNotes)).toBe(true);
      expect(invalidNotes.length).toBe(0);
    });

    test('should return empty array for special currencies with no notes', () => {
      const xauNotes = getNotes('XAU'); // Gold
      expect(Array.isArray(xauNotes)).toBe(true);
      expect(xauNotes.length).toBe(0);
    });

    test('should be case insensitive', () => {
      const upperCase = getNotes('EUR');
      const lowerCase = getNotes('eur');
      expect(upperCase).toEqual(lowerCase);
    });
  });

  describe('getCoins', () => {
    test('should return coins array for valid currency', () => {
      const eurCoins = getCoins('EUR');
      expect(Array.isArray(eurCoins)).toBe(true);
      expect(eurCoins.length).toBeGreaterThan(0);
      expect(eurCoins).toEqual([0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2]);
    });

    test('should return empty array for invalid currency', () => {
      const invalidCoins = getCoins('XYZ');
      expect(Array.isArray(invalidCoins)).toBe(true);
      expect(invalidCoins.length).toBe(0);
    });

    test('should return empty array for special currencies with no coins', () => {
      const xauCoins = getCoins('XAU'); // Gold
      expect(Array.isArray(xauCoins)).toBe(true);
      expect(xauCoins.length).toBe(0);
    });

    test('should be case insensitive', () => {
      const upperCase = getCoins('GBP');
      const lowerCase = getCoins('gbp');
      expect(upperCase).toEqual(lowerCase);
    });
  });

  describe('getSupportedCurrencies', () => {
    test('should return an array of supported currency codes', () => {
      const currencies = getSupportedCurrencies();
      expect(Array.isArray(currencies)).toBe(true);
      expect(currencies.length).toBeGreaterThan(100); // Should have many currencies
    });

    test('should return sorted currency codes', () => {
      const currencies = getSupportedCurrencies();
      const sortedCurrencies = [...currencies].sort();
      expect(currencies).toEqual(sortedCurrencies);
    });

    test('should include major currencies', () => {
      const currencies = getSupportedCurrencies();
      const majorCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD'];
      
      majorCurrencies.forEach(currency => {
        expect(currencies).toContain(currency);
      });
    });

    test('should include special currencies', () => {
      const currencies = getSupportedCurrencies();
      const specialCurrencies = ['XAU', 'XAG', 'XDR', 'XTS', 'XXX'];
      
      specialCurrencies.forEach(currency => {
        expect(currencies).toContain(currency);
      });
    });
  });

  describe('hasDenominations', () => {
    test('should return true for valid currency codes', () => {
      expect(hasDenominations('USD')).toBe(true);
      expect(hasDenominations('EUR')).toBe(true);
      expect(hasDenominations('GBP')).toBe(true);
      expect(hasDenominations('JPY')).toBe(true);
    });

    test('should return false for invalid currency codes', () => {
      expect(hasDenominations('XYZ')).toBe(false);
      expect(hasDenominations('INVALID')).toBe(false);
      expect(hasDenominations('')).toBe(false);
    });

    test('should return true for special currencies', () => {
      expect(hasDenominations('XAU')).toBe(true); // Gold
      expect(hasDenominations('XAG')).toBe(true); // Silver
      expect(hasDenominations('XDR')).toBe(true); // Special Drawing Rights
    });

    test('should be case insensitive', () => {
      expect(hasDenominations('USD')).toBe(true);
      expect(hasDenominations('usd')).toBe(true);
      expect(hasDenominations('Usd')).toBe(true);
    });
  });

  describe('getAllDenominations', () => {
    test('should return complete denominations object', () => {
      const allData = getAllDenominations();
      expect(typeof allData).toBe('object');
      expect(allData).not.toBeNull();
    });

    test('should return a copy, not the original object', () => {
      const allData1 = getAllDenominations();
      const allData2 = getAllDenominations();
      
      // Should be equal in content but not the same object reference
      expect(allData1).toEqual(allData2);
      expect(allData1).not.toBe(allData2);
    });

    test('should contain major currencies', () => {
      const allData = getAllDenominations();
      expect(allData.USD).toBeDefined();
      expect(allData.EUR).toBeDefined();
      expect(allData.GBP).toBeDefined();
      expect(allData.JPY).toBeDefined();
    });
  });

  describe('getCurrenciesWithNotes', () => {
    test('should return array of currencies that have notes', () => {
      const currenciesWithNotes = getCurrenciesWithNotes();
      expect(Array.isArray(currenciesWithNotes)).toBe(true);
      expect(currenciesWithNotes.length).toBeGreaterThan(0);
    });

    test('should be sorted', () => {
      const currencies = getCurrenciesWithNotes();
      const sortedCurrencies = [...currencies].sort();
      expect(currencies).toEqual(sortedCurrencies);
    });

    test('should include currencies known to have notes', () => {
      const currencies = getCurrenciesWithNotes();
      expect(currencies).toContain('USD');
      expect(currencies).toContain('EUR');
      expect(currencies).toContain('GBP');
    });

    test('should not include currencies without notes', () => {
      const currencies = getCurrenciesWithNotes();
      expect(currencies).not.toContain('XAU'); // Gold has no notes
    });
  });

  describe('getCurrenciesWithCoins', () => {
    test('should return array of currencies that have coins', () => {
      const currenciesWithCoins = getCurrenciesWithCoins();
      expect(Array.isArray(currenciesWithCoins)).toBe(true);
      expect(currenciesWithCoins.length).toBeGreaterThan(0);
    });

    test('should be sorted', () => {
      const currencies = getCurrenciesWithCoins();
      const sortedCurrencies = [...currencies].sort();
      expect(currencies).toEqual(sortedCurrencies);
    });

    test('should include currencies known to have coins', () => {
      const currencies = getCurrenciesWithCoins();
      expect(currencies).toContain('USD');
      expect(currencies).toContain('EUR');
      expect(currencies).toContain('GBP');
    });

    test('should not include currencies without coins', () => {
      const currencies = getCurrenciesWithCoins();
      expect(currencies).not.toContain('XAU'); // Gold has no coins
    });
  });

  describe('getHighestNote', () => {
    test('should return highest note value for valid currencies', () => {
      expect(getHighestNote('USD')).toBe(100);
      expect(getHighestNote('EUR')).toBe(500);
    });

    test('should return null for currencies without notes', () => {
      expect(getHighestNote('XAU')).toBeNull(); // Gold
    });

    test('should return null for invalid currencies', () => {
      expect(getHighestNote('XYZ')).toBeNull();
    });

    test('should be case insensitive', () => {
      expect(getHighestNote('USD')).toBe(getHighestNote('usd'));
    });
  });

  describe('getLowestNote', () => {
    test('should return lowest note value for valid currencies', () => {
      expect(getLowestNote('USD')).toBe(1);
      expect(getLowestNote('EUR')).toBe(5);
    });

    test('should return null for currencies without notes', () => {
      expect(getLowestNote('XAU')).toBeNull(); // Gold
    });

    test('should return null for invalid currencies', () => {
      expect(getLowestNote('XYZ')).toBeNull();
    });

    test('should be case insensitive', () => {
      expect(getLowestNote('USD')).toBe(getLowestNote('usd'));
    });
  });

  describe('getHighestCoin', () => {
    test('should return highest coin value for valid currencies', () => {
      expect(getHighestCoin('EUR')).toBe(2);
      expect(getHighestCoin('GBP')).toBe(2);
    });

    test('should return null for currencies without coins', () => {
      expect(getHighestCoin('XAU')).toBeNull(); // Gold
    });

    test('should return null for invalid currencies', () => {
      expect(getHighestCoin('XYZ')).toBeNull();
    });

    test('should be case insensitive', () => {
      expect(getHighestCoin('EUR')).toBe(getHighestCoin('eur'));
    });
  });

  describe('getLowestCoin', () => {
    test('should return lowest coin value for valid currencies', () => {
      expect(getLowestCoin('USD')).toBe(0.01);
      expect(getLowestCoin('EUR')).toBe(0.01);
    });

    test('should return null for currencies without coins', () => {
      expect(getLowestCoin('XAU')).toBeNull(); // Gold
    });

    test('should return null for invalid currencies', () => {
      expect(getLowestCoin('XYZ')).toBeNull();
    });

    test('should be case insensitive', () => {
      expect(getLowestCoin('USD')).toBe(getLowestCoin('usd'));
    });
  });
});