export interface CountryInfo {
  currency: string;
  lattitude: number;
  longitude: number;
  photourl: string;
}
let countryInfo: CountryInfo = {
  currency: 'euro',
  lattitude: 1,
  longitude: 10,
  photourl: 'temp',
};

//in future have Object called countries with values, so that way using the map in the html we can say map.get(countryName).currency
export const COUNTRY_MAP: Map<string, CountryInfo> = new Map([
  ['Spain', countryInfo],
  ['England', countryInfo],
  ['France', countryInfo],
]);
