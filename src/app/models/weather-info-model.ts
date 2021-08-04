export interface WeatherInfo {
  current: CurrentInfo;
  daily: DailyInfo[];
}
export interface CurrentInfo {
  temp: number;
  weather: Weather[];
}
export interface DailyInfo {
  temp: Day;
  weather: Weather[];
}
export interface Day {
  day: number;
}
export interface Weather {
  description: string;
}
