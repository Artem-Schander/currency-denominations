import { CurrencyDenominations } from './types';

/**
 * Comprehensive currency denominations data for banknotes and coins
 */
export const currencyDenominations: CurrencyDenominations = {
  // Special currencies and units
  XUA: { notes: [], coins: [] }, // ADB Unit of Account
  XBA: { notes: [], coins: [] }, // Bond Markets Unit
  XBB: { notes: [], coins: [] }, // Bond Markets Unit
  XBC: { notes: [], coins: [] }, // Bond Markets Unit
  XBD: { notes: [], coins: [] }, // Bond Markets Unit
  XTS: { notes: [], coins: [] }, // Test currency
  XDR: { notes: [], coins: [] }, // Special Drawing Rights
  XAU: { notes: [], coins: [] }, // Gold
  XAG: { notes: [], coins: [] }, // Silver
  XPD: { notes: [], coins: [] }, // Palladium
  XSU: { notes: [], coins: [] }, // Sucre
  XXX: { notes: [], coins: [] }, // No currency
  
  // Replaced currencies
  VEF: { notes: [], coins: [] }, // Replaced by VES
  STD: { notes: [], coins: [] }, // Replaced by STN
  MRO: { notes: [], coins: [] }, // Replaced by MRU
  ZWL: { notes: [], coins: [] }, // No longer in active use

  // Additional missing currencies from world currency list
  AED: { notes: [5, 10, 20, 50, 100, 200, 500, 1000], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] }, // UAE Dirham
  ANG: { notes: [5, 10, 25, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5] }, // Netherlands Antillean Guilder
  ARS: { notes: [10, 20, 50, 100, 200, 500, 1000], coins: [1, 2, 5, 10] }, // Argentine Peso
  AUD: { notes: [5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5, 1, 2] }, // Australian Dollar
  BGN: { notes: [5, 10, 20, 50, 100], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }, // Bulgarian Lev
  BRL: { notes: [2, 5, 10, 20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] }, // Brazilian Real
  BTN: { notes: [1, 5, 10, 20, 50, 100, 500, 1000], coins: [0.25, 0.5, 1] }, // Ngultrum
  CAD: { notes: [5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.25, 1, 2] }, // Canadian Dollar
  CHF: { notes: [10, 20, 50, 100, 200, 1000], coins: [0.05, 0.1, 0.2, 0.5, 1, 2, 5] }, // Swiss Franc
  CLP: { notes: [1000, 2000, 5000, 10000, 20000], coins: [1, 5, 10, 50, 100, 500] }, // Chilean Peso
  CNY: { notes: [1, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.5, 1] }, // Yuan Renminbi
  COP: { notes: [2000, 5000, 10000, 20000, 50000, 100000], coins: [50, 100, 200, 500, 1000] }, // Colombian Peso
  CZK: { notes: [100, 200, 500, 1000, 2000, 5000], coins: [1, 2, 5, 10, 20, 50] }, // Czech Koruna
  DJF: { notes: [1000, 2000, 5000, 10000], coins: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, // Djibouti Franc
  DKK: { notes: [50, 100, 200, 500, 1000], coins: [0.5, 1, 2, 5, 10, 20] }, // Danish Krone
  DOP: { notes: [50, 100, 200, 500, 1000, 2000], coins: [1, 5, 10, 25] }, // Dominican Peso
  EGP: { notes: [5, 10, 20, 50, 100, 200], coins: [0.25, 0.5, 1] }, // Egyptian Pound
  ERN: { notes: [1, 5, 10, 20, 50, 100], coins: [1, 5, 10, 25, 50] }, // Nakfa
  EUR: { notes: [5, 10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }, // Euro
  GBP: { notes: [5, 10, 20, 50], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }, // Pound Sterling
  HKD: { notes: [10, 20, 50, 100, 500, 1000], coins: [0.1, 0.2, 0.5, 1, 2, 5, 10] }, // Hong Kong Dollar
  HUF: { notes: [500, 1000, 2000, 5000, 10000, 20000], coins: [5, 10, 20, 50, 100, 200] }, // Forint
  IDR: { notes: [1000, 2000, 5000, 10000, 20000, 50000, 100000], coins: [25, 50, 100, 200, 500, 1000] }, // Rupiah
  ILS: { notes: [20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.5, 1, 2, 5, 10] }, // New Israeli Sheqel
  INR: { notes: [5, 10, 20, 50, 100, 200, 500, 2000], coins: [1, 2, 5, 10] }, // Indian Rupee
  ISK: { notes: [500, 1000, 2000, 5000, 10000], coins: [1, 5, 10, 50, 100] }, // Iceland Krona
  JPY: { notes: [1000, 2000, 5000, 10000], coins: [1, 5, 10, 50, 100, 500] }, // Yen
  KES: { notes: [50, 100, 200, 500, 1000], coins: [1, 5, 10, 20] }, // Kenyan Shilling
  KPW: { notes: [], coins: [] }, // North Korean Won - limited information
  KRW: { notes: [1000, 5000, 10000, 50000], coins: [1, 5, 10, 50, 100, 500] }, // Won
  MAD: { notes: [20, 50, 100, 200], coins: [0.1, 0.2, 0.5, 1, 2, 5, 10] }, // Moroccan Dirham
  MDL: { notes: [1, 5, 10, 20, 50, 100, 200, 500, 1000], coins: [1, 5, 10, 25, 50] }, // Moldovan Leu
  MKD: { notes: [10, 50, 100, 200, 500, 1000, 2000, 5000], coins: [1, 2, 5, 10, 50] }, // Denar
  MRU: { notes: [5, 10, 20, 50, 100, 200, 500, 1000], coins: [1] }, // Ouguiya (replaced MRO)
  MUR: { notes: [25, 50, 100, 200, 500, 1000, 2000], coins: [1, 5, 20] }, // Mauritius Rupee
  MXN: { notes: [20, 50, 100, 200, 500, 1000], coins: [0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10] }, // Mexican Peso
  MYR: { notes: [1, 5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5] }, // Malaysian Ringgit
  MZN: { notes: [20, 50, 100, 200, 500, 1000], coins: [1, 2, 5, 10] }, // Mozambique Metical
  NAD: { notes: [10, 20, 50, 100, 200], coins: [0.05, 0.1, 0.5, 1, 5, 10] }, // Namibia Dollar
  NGN: { notes: [5, 10, 20, 50, 100, 200, 500, 1000], coins: [0.5, 1, 2] }, // Naira
  NOK: { notes: [50, 100, 200, 500, 1000], coins: [1, 5, 10, 20] }, // Norwegian Krone
  NPR: { notes: [1, 2, 5, 10, 20, 25, 50, 100, 500, 1000], coins: [1, 2, 5, 10] }, // Nepalese Rupee
  NZD: { notes: [5, 10, 20, 50, 100], coins: [0.1, 0.2, 0.5, 1, 2] }, // New Zealand Dollar
  PHP: { notes: [20, 50, 100, 200, 500, 1000], coins: [0.01, 0.05, 0.1, 0.25, 1, 5, 10] }, // Philippine Peso
  PKR: { notes: [10, 20, 50, 100, 500, 1000, 5000], coins: [1, 2, 5] }, // Pakistan Rupee
  PLN: { notes: [10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5] }, // Zloty
  QAR: { notes: [1, 5, 10, 50, 100, 500], coins: [1, 5, 10, 25, 50] }, // Qatari Rial
  RON: { notes: [1, 5, 10, 50, 100, 200, 500], coins: [0.01, 0.05, 0.1, 0.5] }, // Romanian Leu
  RSD: { notes: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000], coins: [1, 2, 5, 10, 20] }, // Serbian Dinar
  RUB: { notes: [50, 100, 200, 500, 1000, 2000, 5000], coins: [1, 2, 5, 10] }, // Russian Ruble
  SAR: { notes: [1, 5, 10, 50, 100, 500], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2] }, // Saudi Riyal
  SEK: { notes: [20, 50, 100, 200, 500, 1000], coins: [1, 2, 5, 10] }, // Swedish Krona
  SGD: { notes: [2, 5, 10, 50, 100, 1000, 10000], coins: [0.01, 0.05, 0.1, 0.2, 0.5, 1] }, // Singapore Dollar
  STN: { notes: [5, 10, 20, 50, 100, 200], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }, // Dobra (replaced STD)
  SVC: { notes: [1, 2, 5, 10, 25, 50, 100, 200], coins: [0.01, 0.03, 0.05, 0.1, 0.25] }, // El Salvador Colon
  THB: { notes: [20, 50, 100, 500, 1000], coins: [0.25, 0.5, 1, 2, 5, 10] }, // Baht
  TND: { notes: [5, 10, 20, 50], coins: [0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] }, // Tunisian Dinar
  TRY: { notes: [5, 10, 20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] }, // Turkish Lira
  TWD: { notes: [100, 200, 500, 1000, 2000], coins: [0.5, 1, 5, 10, 20, 50] }, // New Taiwan Dollar
  UAH: { notes: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000], coins: [1, 2, 5, 10, 25, 50] }, // Hryvnia
  USD: { notes: [1, 2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] }, // US Dollar
  UYU: { notes: [20, 50, 100, 200, 500, 1000, 2000], coins: [1, 2, 5, 10] }, // Peso Uruguayo
  VES: { notes: [2, 5, 10, 20, 50, 100, 200, 500, 1000000], coins: [0.25, 0.5, 1] }, // Bolívar (replaced VEF)
  VND: { notes: [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000], coins: [200, 500, 1000, 2000, 5000] }, // Dong
  XCD: { notes: [5, 10, 20, 50, 100], coins: [0.01, 0.02, 0.05, 0.1, 0.25, 1] }, // East Caribbean Dollar
  XPT: { notes: [], coins: [] }, // Platinum
  ZAR: { notes: [10, 20, 50, 100, 200], coins: [0.05, 0.1, 0.2, 0.5, 1, 2, 5] }, // Rand
  ZMW: { notes: [2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.5, 1] }, // Zambian Kwacha

  // Active currencies with denominations
  AFN: { notes: [1, 2, 5, 10, 20, 50, 100, 500, 1000], coins: [1, 2, 5] },
  DZD: { notes: [200, 500, 1000, 2000], coins: [1, 2, 5, 10, 20, 50, 100] },
  AMD: { notes: [1000, 2000, 5000, 10000, 20000, 50000, 100000], coins: [10, 20, 50, 100, 200, 500] },
  AWG: { notes: [5, 10, 25, 50, 100, 200], coins: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5] },
  AZN: { notes: [1, 5, 10, 20, 50, 100, 200], coins: [0.01, 0.03, 0.05, 0.1, 0.2, 0.5] },
  BSD: { notes: [0.5, 1, 3, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] },
  BHD: { notes: [0.5, 1, 5, 10, 20], coins: [0.005, 0.01, 0.025, 0.05, 0.1] },
  PAB: { notes: [], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] }, // Uses USD notes
  BBD: { notes: [2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] },
  BYN: { notes: [5, 10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] },
  BZD: { notes: [2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25, 1] },
  BMD: { notes: [2, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] },
  BOB: { notes: [10, 20, 50, 100, 200], coins: [0.1, 0.2, 0.5, 1, 2, 5] },
  BND: { notes: [1, 5, 10, 25, 50, 100, 1000], coins: [0.01, 0.05, 0.1, 0.2, 0.5] },
  BIF: { notes: [500, 1000, 2000, 5000, 10000], coins: [1, 2, 5, 10, 50, 100] },
  XOF: { notes: [500, 1000, 2000, 5000, 10000], coins: [5, 10, 25, 50, 100, 200, 250, 500] },
  XAF: { notes: [500, 1000, 2000, 5000, 10000], coins: [1, 2, 5, 10, 25, 50, 100, 500] },
  XPF: { notes: [500, 1000, 5000, 10000], coins: [1, 2, 5, 10, 20, 50, 100] },
  CVE: { notes: [200, 500, 1000, 2000, 5000], coins: [1, 5, 10, 20, 50, 100] },
  KYD: { notes: [1, 5, 10, 25, 50, 100], coins: [0.01, 0.05, 0.1, 0.25] },
  KMF: { notes: [500, 1000, 2000, 5000, 10000], coins: [25, 50, 100, 250] },
  CDF: { notes: [50, 100, 200, 500, 1000, 5000, 10000, 20000], coins: [] },
  BAM: { notes: [10, 20, 50, 100, 200], coins: [0.1, 0.2, 0.5, 1, 2, 5] },
  NIO: { notes: [10, 20, 50, 100, 200, 500], coins: [0.05, 0.1, 0.25, 0.5, 1, 5] },
  CRC: { notes: [1000, 2000, 5000, 10000, 20000, 50000], coins: [5, 10, 25, 50, 100, 500] },
  CUP: { notes: [1, 3, 5, 10, 20, 50, 100], coins: [0.01, 0.02, 0.05, 0.2, 1, 3] },
  GMD: { notes: [5, 10, 20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] },
  ETB: { notes: [1, 5, 10, 50, 100], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] },
  FKP: { notes: [5, 10, 20, 50, 100], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] },
  FJD: { notes: [5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5, 1, 2] },
  GHS: { notes: [1, 2, 5, 10, 20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.2, 0.5, 1, 2] },
  GIP: { notes: [5, 10, 20, 50, 100], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] },
  HTG: { notes: [10, 25, 50, 100, 250, 500, 1000], coins: [0.05, 0.1, 0.2, 0.5, 1, 5] },
  PYG: { notes: [2000, 5000, 10000, 20000, 50000, 100000], coins: [50, 100, 500, 1000] },
  GNF: { notes: [500, 1000, 2000, 5000, 10000], coins: [1, 5, 10, 25, 50] },
  GYD: { notes: [20, 50, 100, 500, 1000, 5000], coins: [1, 5, 10] },
  IRR: { notes: [10000, 20000, 50000, 100000], coins: [] },
  IQD: { notes: [250, 500, 1000, 5000, 10000, 25000], coins: [25, 50, 100] },
  JMD: { notes: [50, 100, 500, 1000, 5000], coins: [1, 5, 10, 20] },
  JOD: { notes: [1, 5, 10, 20, 50], coins: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5] },
  PGK: { notes: [2, 5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5, 1] },
  LAK: { notes: [500, 1000, 2000, 5000, 10000, 20000, 50000], coins: [10, 20, 50, 100] },
  HRK: { notes: [10, 20, 50, 100, 200, 500, 1000], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5] },
  KWD: { notes: [0.25, 0.5, 1, 5, 10, 20], coins: [0.005, 0.01, 0.02, 0.05, 0.1] },
  AOA: { notes: [5, 10, 50, 100, 200, 500, 1000, 2000], coins: [1, 2, 5] },
  MMK: { notes: [50, 100, 200, 500, 1000, 5000, 10000], coins: [] },
  GEL: { notes: [5, 10, 20, 50, 100, 200], coins: [0.05, 0.1, 0.2, 0.5, 1, 2] },
  LBP: { notes: [1000, 5000, 10000, 20000, 50000, 100000], coins: [250, 500] },
  ALL: { notes: [200, 500, 1000, 2000, 5000], coins: [1, 5, 10, 20, 50, 100] },
  HNL: { notes: [1, 2, 5, 10, 20, 50, 100, 500], coins: [0.05, 0.1, 0.2, 0.5] },
  SLL: { notes: [1000, 2000, 5000, 10000], coins: [10, 50, 100, 500] },
  LRD: { notes: [5, 10, 20, 50, 100], coins: [1, 5, 10, 25] },
  LYD: { notes: [1, 5, 10, 20, 50], coins: [0.05, 0.1, 0.25, 0.5] },
  SZL: { notes: [10, 20, 50, 100, 200], coins: [0.1, 0.2, 0.5, 1, 2, 5] },
  LSL: { notes: [10, 20, 50, 100, 200], coins: [0.05, 0.1, 0.2, 0.5, 1, 2, 5] },
  MGA: { notes: [100, 200, 500, 1000, 2000, 5000, 10000, 20000], coins: [1, 2, 4, 5, 10, 20, 50] },
  MWK: { notes: [20, 50, 100, 200, 500, 1000, 2000], coins: [1, 5, 10] },
  MVR: { notes: [5, 10, 20, 50, 100, 500, 1000], coins: [0.01, 0.02, 0.05, 0.1, 0.25, 0.5, 1, 2] },
  MOP: { notes: [10, 20, 50, 100, 500, 1000], coins: [0.1, 0.2, 0.5, 1, 2, 5] },
  TOP: { notes: [1, 2, 5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5, 1, 2] },
  CUC: { notes: [1, 3, 5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] },
  BWP: { notes: [10, 20, 50, 100, 200], coins: [0.05, 0.1, 0.25, 0.5, 1, 2, 5] },
  GTQ: { notes: [1, 5, 10, 20, 50, 100, 200], coins: [0.01, 0.05, 0.1, 0.25, 0.5, 1] },
  OMR: { notes: [0.5, 1, 5, 10, 20, 50], coins: [0.005, 0.01, 0.025, 0.05, 0.1, 0.2, 0.5] },
  KHR: { notes: [100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000], coins: [50, 100, 200, 500] },
  RWF: { notes: [500, 1000, 2000, 5000], coins: [1, 5, 10, 20, 50, 100] },
  SHP: { notes: [5, 10, 20], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2] },
  SCR: { notes: [25, 50, 100, 500], coins: [0.01, 0.05, 0.1, 0.25, 1, 5, 10] },
  PEN: { notes: [10, 20, 50, 100, 200], coins: [0.1, 0.2, 0.5, 1, 2, 5] },
  SBD: { notes: [2, 5, 10, 20, 50, 100], coins: [0.1, 0.2, 0.5, 1, 2] },
  KGS: { notes: [20, 50, 100, 200, 500, 1000, 5000], coins: [1, 3, 5, 10] },
  SOS: { notes: [1000, 2000, 5000, 10000], coins: [1, 5, 10, 50, 100, 500] },
  TJS: { notes: [1, 3, 5, 10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 3, 5] },
  SSP: { notes: [1, 5, 10, 25, 100], coins: [] },
  LKR: { notes: [20, 50, 100, 500, 1000, 5000], coins: [0.25, 0.5, 1, 2, 5, 10] },
  SDG: { notes: [2, 5, 10, 20, 50, 100, 200, 500], coins: [0.01, 0.02, 0.05, 0.1, 0.2, 0.5] },
  SRD: { notes: [5, 10, 20, 50, 100], coins: [0.01, 0.05, 0.1, 0.25, 1] },
  SYP: { notes: [50, 100, 200, 500, 1000, 2000], coins: [1, 2, 5, 10, 25, 50] },
  BDT: { notes: [2, 5, 10, 20, 50, 100, 500, 1000], coins: [1, 2, 5] },
  WST: { notes: [2, 5, 10, 20, 50, 100], coins: [0.1, 0.2, 0.5, 1, 2] },
  TZS: { notes: [500, 1000, 2000, 5000, 10000], coins: [50, 100, 200, 500] },
  KZT: { notes: [200, 500, 1000, 2000, 5000, 10000, 20000], coins: [1, 2, 5, 10, 20, 50, 100, 200] },
  TTD: { notes: [1, 5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.25, 0.5, 1] },
  MNT: { notes: [1, 5, 10, 20, 50, 100, 500, 1000, 5000, 10000, 20000], coins: [20, 50, 100, 200, 500] },
  TMT: { notes: [1, 5, 10, 20, 50, 100], coins: [0.05, 0.1, 0.2, 0.5] },
  UGX: { notes: [1000, 2000, 5000, 10000, 20000, 50000], coins: [50, 100, 200, 500, 1000] },
  UZS: { notes: [100, 200, 500, 1000, 5000, 10000, 50000, 100000], coins: [25, 50, 100, 200, 500] },
  VUV: { notes: [200, 500, 1000, 2000, 5000, 10000], coins: [5, 10, 20, 50, 100] },
  YER: { notes: [50, 100, 200, 250, 500, 1000], coins: [1, 5, 10, 20] }
};