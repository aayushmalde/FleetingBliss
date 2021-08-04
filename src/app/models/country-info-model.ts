export interface CountryInfo {
  currency: string;
  lattitude: number;
  longitude: number;
  place: string;
}
let spainInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 40.46,
  longitude: 3.75,
  place: 'europe',
};
let englandInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 52.35,
  longitude: 1.17,
  place: 'europe',
};
let franceInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 46.22,
  longitude: 2.21,
  place: 'europe',
};
let italyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 41.87,
  longitude: 12.57,
  place: 'europe',
};
let germanyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 51.17,
  longitude: 10.45,
  place: 'europe',
};

let japanInfo: CountryInfo = {
  currency: 'yen',
  lattitude: 36.2,
  longitude: 138.25,
  place: 'asia',
};
let southKoreaInfo: CountryInfo = {
  currency: 'won',
  lattitude: 35.91,
  longitude: 127.77,
  place: 'asia',
};
let chinaInfo: CountryInfo = {
  currency: 'yuan',
  lattitude: 35.86,
  longitude: 104.2,
  place: 'asia',
};
let indiaInfo: CountryInfo = {
  currency: 'rupees',
  lattitude: 20.59,
  longitude: 78.96,
  place: 'asia',
};
let singaporeInfo: CountryInfo = {
  currency: 'sgd',
  lattitude: 1.35,
  longitude: 103.82,
  place: 'asia',
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
]);
