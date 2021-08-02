export interface WeatherInfo {
  daily: Daily;
  current: Current;
}
export interface Current {
  temp: any;
  weather: any;
}
export interface Daily {
  temp: any;
  weather: any;
}

export interface Weather {
  main: any;
  description: string;
}
