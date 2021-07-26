import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { weatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  text = 'app';
  countryName = 'Portugal';
  current_temp: any;
  current_description: any;
  daily_temp: any;
  daily_description: any;
  weatherInformation: any[] | undefined;

  constructor(private getWeatherService: weatherService) {}

  ngOnInit() {
    this.getWeatherService.getData().subscribe((data) => {
      console.log(data.daily[0].weather);
      this.current_temp = data.current.temp;
      this.current_description = data.current.weather[0].description;
      forEach(data.daily, (value) => {
        this.daily_temp = value.temp.day;
        console.log(this.daily_temp);
        forEach(value.weather, (element) => {
          this.daily_description = element.description;
          console.log(this.daily_description);
        });
      });
    });
  }
}
