import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { CountryNameService } from '../services/country-name.service';
import { WeatherService } from '../services/weather.service';
import { WeatherInfo } from '../weather-info-model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  text = 'app';
  countryName = 'Spain';
  countryName$: Observable<string> | undefined; // convention to use $ at end for observables
  weatherInfo!: WeatherInfo;
  weatherInfo$: Observable<WeatherInfo> | undefined; // convention to use $ at end for observables

  temp_arr: Number[] = [];
  desc_arr: String[] = [];

  weatherInformation: any[] | undefined;

  constructor(private weatherService: WeatherService, private countryNameService: CountryNameService ) {}

  ngOnInit() {
    this.countryName$ = this.countryNameService.getCountryValueObs().pipe(
      tap((countryName) => {
        this.countryName = countryName;

        this.weatherInfo$ = this.weatherService
          .getWeatherInfoObservable(this.countryName)
          .pipe(
            take(1),
            tap((weatherInfo) => {
              this.weatherInfo = weatherInfo;
              this.desc_arr = [];
              this.temp_arr = [];
              this.desc_arr?.push(
                this.weatherInfo.current.weather[0].description
              );
              this.temp_arr?.push(this.weatherInfo.current.temp);
              forEach(this.weatherInfo.daily, (value) => {
                console.log(value.temp.day);
                this.temp_arr.push(value.temp.day);
                console.log('arr', this.temp_arr);
                forEach(value.weather, (element) => {
                  this.desc_arr.push(element.description);
                });
              });
            })
          );
      })
    );
  }
    
}
