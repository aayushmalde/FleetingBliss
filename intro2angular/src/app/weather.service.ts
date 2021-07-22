import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { COUNTRY_MAP } from './mainpage/country-info-model';
import { WeatherInfo } from './weather-info-model';

@Injectable()
export class weatherService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<WeatherInfo> {
    return this.httpClient
      .get<WeatherInfo>(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' +
          COUNTRY_MAP.get('Spain')?.lattitude +
          '&lon=' +
          COUNTRY_MAP.get('Spain')?.longitude +
          '&exclude=minutely,hourly,alerts&appid=b5485a97f56b4e545b37f8e20939c303'
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
