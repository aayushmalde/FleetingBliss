export interface CountryInfo {
  currency: string;
  lattitude: number;
  longitude: number;
  photourl: string;
}
let spainInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 40,
  longitude: 4,
  photourl: 'temp',
};
let englandInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 52,
  longitude: 1,
  photourl: 'temp',
};
let franceInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 46,
  longitude: 2,
  photourl: 'temp',
};

//in future have Object called countries with values, so that way using the map in the html we can say map.get(countryName).currency
export const COUNTRY_MAP: Map<string, CountryInfo> = new Map([
  ['Spain', spainInfo],
  ['England', englandInfo],
  ['France', franceInfo],
]);
