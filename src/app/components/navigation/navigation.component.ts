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
            *ngFor="let country of europePlaces"
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
            *ngFor="let country of asiaPlaces"
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
            *ngFor="let country of africaPlaces"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Best Beaches</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of beachPlaces"
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
  europePlaces: string[] = [];
  asiaPlaces: string[] = [];
  africaPlaces: string[] = [];
  beachPlaces: string[] = [];

  ngOnInit(): void {
    this.europePlaces = this.getPlaceNames('europe');
    this.asiaPlaces = this.getPlaceNames('asia');
    this.africaPlaces = this.getPlaceNames('africa');
    this.beachPlaces = this.getPlaceNames('beach');
  }

  setCountry(event: MatSelectChange) {
    this.countryNameService.countryValue = event.value;
  }

  getPlaceNames(continent: string) {
    let ret: string[] = [];
    COUNTRY_MAP.forEach((value: CountryInfo, key: string) => {
      if (value.place == continent) {
        ret.push(key);
      }
    });
    return ret;
  }
}
