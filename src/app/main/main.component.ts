import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryInfo, COUNTRY_MAP } from './country-info-model';
import { CountryNameService } from '../services/country-name.service';

export interface lodgingInfo {
  name: string;
  numOfPeople: number;
  cost: number;
  duration: number;
}

export interface activityInfo {
  name: string;
  numOfPeople: number;
  cost: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countryName: string = '';
  countryValue1: string = '';
  countryName$: Observable<string> | undefined; // convention to use $ at end for observables
  displayedImage = 'assets/images/horse.jpg';


  constructor(private countryNameService: CountryNameService) {}

  ngOnInit() {
    this.countryName$ = this.countryNameService.getCountryValueObs().pipe(
      tap((countryName) => {
        this.countryName = countryName;
      })
    );
  }

  getValue(countryName: string) {
    return COUNTRY_MAP.get(countryName)?.currency;
  }
}
