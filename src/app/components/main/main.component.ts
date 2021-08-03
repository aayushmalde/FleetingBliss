import { Component, OnInit } from '@angular/core';
import { forEach } from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  EUROPE_COUNTRY_MAP,
  ASIA_COUNTRY_MAP,
  countries,
  CountryInfo,
} from '../../models/country-info-model';
import { CountryNameService } from '../../services/country-name.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  countryName: string = '';
  countryName$: Observable<string> | undefined;

  constructor(private countryNameService: CountryNameService) {}

  ngOnInit() {
    this.countryName$ = this.countryNameService.getCountryValueObs().pipe(
      tap((countryName) => {
        this.countryName = countryName;
      })
    );
  }

  getCurrency(countryName: string) {
    if (ASIA_COUNTRY_MAP.has(countryName)) {
      return ASIA_COUNTRY_MAP.get(countryName)?.currency;
    }
    return EUROPE_COUNTRY_MAP.get(countryName)?.currency;
  }
}
