import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryValuesService } from '../country-values.service';
import { CountryInfo, COUNTRY_MAP } from './country-info-model';

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
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  countryName: string = '';
  countryValue1: string = '';
  countryName$: Observable<string> | undefined; // convention to use $ at end for observables
  displayedImage = 'assets/images/horse.jpg';

  countryInfo: CountryInfo = {
    currency: 'euro',
    lattitude: 100,
    longitude: 100,
    photourl: 'temp',
  };

  //in future have Object called countries with values, so that way using the map in the html we can say map.get(countryName).currency
  // countryMap: Map<string, CountryInfo> = new Map([
  //   ['Spain', this.countryInfo],
  //   ['England', this.countryInfo],
  //   ['France', this.countryInfo],
  // ]);

  constructor(private countryNameService: CountryValuesService) {}

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
