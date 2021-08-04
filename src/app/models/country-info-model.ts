export interface CountryInfo {
  currency: string;
  lattitude: number;
  longitude: number;
  country: string;
}
let spainInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 40.46,
  longitude: -3.75,
  country: 'europe',
};
let englandInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 52.35,
  longitude: -1.17,
  country: 'europe',
};
let franceInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 46.22,
  longitude: 2.21,
  country: 'europe',
};
let italyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 41.87,
  longitude: 12.57,
  country: 'europe',
};
let germanyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 51.17,
  longitude: 10.45,
  country: 'europe',
};

let japanInfo: CountryInfo = {
  currency: 'yen',
  lattitude: 36.2,
  longitude: 138.25,
  country: 'asia',
};
let southKoreaInfo: CountryInfo = {
  currency: 'won',
  lattitude: 35.91,
  longitude: 127.77,
  country: 'asia',
};
let chinaInfo: CountryInfo = {
  currency: 'yuan',
  lattitude: 35.86,
  longitude: 104.2,
  country: 'asia',
};
let indiaInfo: CountryInfo = {
  currency: 'rupees',
  lattitude: 20.59,
  longitude: 78.96,
  country: 'asia',
};
let singaporeInfo: CountryInfo = {
  currency: 'sgd',
  lattitude: 1.35,
  longitude: 103.82,
  country: 'asia',
};
let tanzaniaInfo: CountryInfo = {
  currency: 'tzs',
  lattitude: -6.37,
  longitude: 34.89,
  country: 'africa',
};
let egyptInfo: CountryInfo = {
  currency: 'egp',
  lattitude: 26.82,
  longitude: 30.8,
  country: 'africa',
};
let madagascarInfo: CountryInfo = {
  currency: 'mga',
  lattitude: -18.77,
  longitude: 46.87,
  country: 'africa',
};
let ethiopiaInfo: CountryInfo = {
  currency: 'etb',
  lattitude: 9.15,
  longitude: 40.49,
  country: 'africa',
};
let southAfricaInfo: CountryInfo = {
  currency: 'rand',
  lattitude: -30.56,
  longitude: 22.94,
  country: 'africa',
};

export const COUNTRY_MAP: Map<string, CountryInfo> = new Map([
  ['Spain', spainInfo],
  ['England', englandInfo],
  ['France', franceInfo],
  ['Italy', italyInfo],
  ['Germany', germanyInfo],
  ['Japan', japanInfo],
  ['South Korea', southKoreaInfo],
  ['China', chinaInfo],
  ['India', indiaInfo],
  ['Singapore', singaporeInfo],
  ['Tanzania', tanzaniaInfo],
  ['Egypt', egyptInfo],
  ['Madagascar', madagascarInfo],
  ['Ethiopia', ethiopiaInfo],
  ['South Africa', southAfricaInfo],
]);
