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

  temp_arr: Number[] = [];
  desc_arr: String[] = [];

  weatherInformation: any[] | undefined;

  constructor(private getWeatherService: weatherService) {}

  ngOnInit() {
    this.getWeatherService.getData().subscribe((data) => {
      this.desc_arr?.push(data.current.weather[0].description);
      this.temp_arr?.push(data.current.temp);
      forEach(data.daily, (value) => {
        console.log(value.temp.day);
        this.temp_arr.push(value.temp.day);
        console.log('arr', this.temp_arr);
        forEach(value.weather, (element) => {
          this.desc_arr.push(element.description);
        });
      });
    });
  }
}
