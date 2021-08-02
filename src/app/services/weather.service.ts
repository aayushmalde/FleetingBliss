import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { COUNTRY_MAP } from '../main/country-info-model';
import { WeatherInfo } from '../weather-info-model';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherInfoObservable(countryName: string): Observable<WeatherInfo> {
    return this.httpClient
      .get<WeatherInfo>(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' +
          COUNTRY_MAP.get(countryName)?.lattitude +
          '&lon=' +
          COUNTRY_MAP.get(countryName)?.longitude +
          '&exclude=minutely,hourly,alerts&units=imperial&appid=b5485a97f56b4e545b37f8e20939c303'
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //test
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
