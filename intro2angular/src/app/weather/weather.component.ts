import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  text = 'app';
  countryName = 'Portugal';
  weather$: Observable<string> | undefined; // convention to use $ at end for observables
  temperature: any;
  weatherInformation: any[] | undefined;

  constructor(private getWeatherService: weatherService) {}

  ngOnInit() {
    this.getWeatherService.getData().subscribe((data) => {
      console.log(data.current.temp);
      this.temperature = data.current.temp;
    });
  }
}
