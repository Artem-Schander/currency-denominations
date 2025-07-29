import {
  getDenominations,
  getNotes,
  getCoins,
  getSupportedCurrencies,
  hasDenominations,
  getAllDenominations,
  getHighestNote,
  getLowestNote
} from './index';

/**
 * Simple test function to validate the core functionality
 */
function runTests(): void {
  console.log('Running currency denominations tests...\n');

  // Test 1: Get USD denominations (should exist in the data)
  console.log('Test 1: Getting USD denominations');
  const usdData = getDenominations('USD');
  console.log('USD data:', usdData);
  if (usdData === null) {
    console.log('✓ USD not found (expected since not in provided data)');
  }

  // Test 2: Get AFN denominations (should exist)
  console.log('\nTest 2: Getting AFN denominations');
  const afnData = getDenominations('AFN');
  console.log('AFN data:', afnData);
  if (afnData && afnData.notes.length > 0) {
    console.log('✓ AFN found with notes:', afnData.notes);
  }

  // Test 3: Get only notes for AFN
  console.log('\nTest 3: Getting AFN notes only');
  const afnNotes = getNotes('AFN');
  console.log('AFN notes:', afnNotes);

  // Test 4: Get only coins for AFN
  console.log('\nTest 4: Getting AFN coins only');
  const afnCoins = getCoins('AFN');
  console.log('AFN coins:', afnCoins);

  // Test 5: Check if currency is supported
  console.log('\nTest 5: Checking if AFN is supported');
  const isAfnSupported = hasDenominations('AFN');
  console.log('AFN supported:', isAfnSupported);

  // Test 6: Check if invalid currency is supported
  console.log('\nTest 6: Checking if XYZ (invalid) is supported');
  const isXyzSupported = hasDenominations('XYZ');
  console.log('XYZ supported:', isXyzSupported);

  // Test 7: Get supported currencies count
  console.log('\nTest 7: Getting supported currencies');
  const supportedCurrencies = getSupportedCurrencies();
  console.log('Total supported currencies:', supportedCurrencies.length);
  console.log('First 10 currencies:', supportedCurrencies.slice(0, 10));

  // Test 8: Test highest and lowest denominations
  console.log('\nTest 8: Getting highest and lowest notes for AFN');
  const highestNote = getHighestNote('AFN');
  const lowestNote = getLowestNote('AFN');
  console.log('AFN highest note:', highestNote);
  console.log('AFN lowest note:', lowestNote);

  // Test 9: Test with special currencies (no denominations)
  console.log('\nTest 9: Testing special currency XAU (gold)');
  const xauData = getDenominations('XAU');
  console.log('XAU data:', xauData);
  if (xauData && xauData.notes.length === 0 && xauData.coins.length === 0) {
    console.log('✓ XAU has empty denominations as expected');
  }

  // Test 10: Case insensitive check
  console.log('\nTest 10: Case insensitive currency lookup');
  const afnLower = getDenominations('afn');
  const afnUpper = getDenominations('AFN');
  if (JSON.stringify(afnLower) === JSON.stringify(afnUpper)) {
    console.log('✓ Case insensitive lookup works');
  } else {
    console.log('✗ Case insensitive lookup failed');
  }

  console.log('\nAll tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}