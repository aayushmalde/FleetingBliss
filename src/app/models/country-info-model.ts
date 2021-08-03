export interface CountryInfo {
  currency: string;
  lattitude: number;
  longitude: number;
}
let spainInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 40.46,
  longitude: 3.75,
};
let englandInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 52.35,
  longitude: 1.17,
};
let franceInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 46.22,
  longitude: 2.21,
};
let italyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 41.87,
  longitude: 12.57,
};
let germanyInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 51.17,
  longitude: 10.45,
};

export const EUROPE_COUNTRY_MAP: Map<string, CountryInfo> = new Map([
  ['Spain', spainInfo],
  ['England', englandInfo],
  ['France', franceInfo],
  ['Italy', italyInfo],
  ['Germany', germanyInfo],
]);

let japanInfo: CountryInfo = {
  currency: 'yen',
  lattitude: 36.2,
  longitude: 138.25,
};
let southKoreaInfo: CountryInfo = {
  currency: 'won',
  lattitude: 35.91,
  longitude: 127.77,
};
let chinaInfo: CountryInfo = {
  currency: 'yuan',
  lattitude: 35.86,
  longitude: 104.2,
};
let indiaInfo: CountryInfo = {
  currency: 'rupees',
  lattitude: 20.59,
  longitude: 78.96,
};
let singaporeInfo: CountryInfo = {
  currency: 'sgd',
  lattitude: 1.35,
  longitude: 103.82,
};

export const ASIA_COUNTRY_MAP: Map<string, CountryInfo> = new Map([
  ['Japan', japanInfo],
  ['South Korea', southKoreaInfo],
  ['China', chinaInfo],
  ['India', indiaInfo],
  ['Singapore', singaporeInfo],
]);

export const countries = [EUROPE_COUNTRY_MAP, ASIA_COUNTRY_MAP];
