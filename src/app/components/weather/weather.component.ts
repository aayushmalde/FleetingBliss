import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { CountryNameService } from '../../services/country-name.service';
import { WeatherService } from '../../services/weather.service';
import { WeatherInfo } from '../../models/weather-info-model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  text = '';
  countryName = '';
  countryName$: Observable<string> | undefined; // convention to use $ at end for observables
  weatherInfo!: WeatherInfo;
  weatherInfo$: Observable<WeatherInfo> | undefined; // convention to use $ at end for observables

  temperatures: Number[] = [];
  descriptions: String[] = [];

  weatherInformation: any[] | undefined;

  constructor(
    private weatherService: WeatherService,
    private countryNameService: CountryNameService
  ) {}

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
              this.descriptions = [];
              this.temperatures = [];
              this.descriptions.push(
                this.weatherInfo.current.weather[0].description
              );
              this.temperatures?.push(this.weatherInfo.current.temp);
              forEach(this.weatherInfo.daily, (value) => {
                console.log(value.temp.day);
                this.temperatures.push(value.temp.day);
                console.log('arr', this.temperatures);
                forEach(value.weather, (element) => {
                  this.descriptions.push(element.description);
                });
              });
            })
          );
      })
    );
  }
}
