import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { CountryValuesService } from '../country-values.service';
import { COUNTRY_MAP } from '../mainpage/country-info-model';
@Component({
  selector: 'app-navigation',
  template: `
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
        <mat-label class="label">Popular in USA</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of usaPlaces"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Natural Wonders</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of naturePlaces"
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
  constructor(private countryNameService: CountryValuesService) {}
  europePlaces: string[] | undefined;
  asiaPlaces = ['Japan', 'South Korea', 'China', 'India', 'Singapore'];
  africaPlaces = ['Egypt', 'Tanzania', 'SouthAfrica', 'Madagascar', 'Morocco'];
  usaPlaces = [
    'New York',
    'California',
    'Washington D.C.',
    'Las Vegas, Nevada',
    'New Orleans,Louisianna',
    'Alaska',
  ];
  naturePlaces = [
    'Great Barrier Reef, Australia',
    'Yellowstone National Park',
    'Mt. Everest, Nepal',
    'Grand Canyon,Arizona',
    'Niagra Falls, Canada',
    'Northern Lights, Norway',
  ];
  beachPlaces = [
    'Fiji',
    'Bora Bora',
    'Maldives',
    'Tahiti',
    'Maui',
    'Cancun',
    'Bahamas',
    'Amalfi Coast',
  ];
  ngOnInit(): void {
    this.europePlaces = Array.from(COUNTRY_MAP.keys());
  }

  setCountry(event: MatSelectChange) {
    this.countryNameService.countryValue = event.value;
    console.log(event.value);
  }
  selectedCountry = 'Spain';
}
