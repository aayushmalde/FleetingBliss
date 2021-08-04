import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { CountryInfo, COUNTRY_MAP } from '../../models/country-info-model';
import { CountryNameService } from '../../services/country-name.service';
import { filter, forEach } from 'lodash';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="header">
      <div class="websitename">Fleeting Bliss</div>
      <div class="description">Plan the vacation of your dreams!</div>
      <div class="logo">Image/Logo here</div>
    </div>
    <div class="navigationbar">
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Europe</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of europeContinent"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Asia</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of asiaContinent"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Africa</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of africaContinent"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private countryNameService: CountryNameService) {}
  europeContinent: string[] = [];
  asiaContinent: string[] = [];
  africaContinent: string[] = [];

  ngOnInit(): void {
    this.europeContinent = this.getCountryNamesforContinent('europe');
    this.asiaContinent = this.getCountryNamesforContinent('asia');
    this.africaContinent = this.getCountryNamesforContinent('africa');
  }

  setCountry(event: MatSelectChange) {
    this.countryNameService.countryValue = event.value;
  }

  getCountryNamesforContinent(continent: string) {
    let countryNames: string[] = [];
    COUNTRY_MAP.forEach((value: CountryInfo, key: string) => {
      if (value.country == continent) {
        countryNames.push(key);
      }
    });
    return countryNames;
  }
}
