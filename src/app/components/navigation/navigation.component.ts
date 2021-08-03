import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import {
  ASIA_COUNTRY_MAP,
  EUROPE_COUNTRY_MAP,
} from '../../models/country-info-model';
import { CountryNameService } from '../../services/country-name.service';
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
  europePlaces: string[] | undefined;
  asiaPlaces: string[] | undefined;
  africaPlaces = ['Egypt', 'Tanzania', 'SouthAfrica', 'Madagascar', 'Morocco'];
  beachPlaces = ['Fiji', 'Bora Bora', 'Maldives', 'Mexico', 'Bahamas'];
  ngOnInit(): void {
    this.europePlaces = Array.from(EUROPE_COUNTRY_MAP.keys());
    this.asiaPlaces = Array.from(ASIA_COUNTRY_MAP.keys());
  }

  setCountry(event: MatSelectChange) {
    this.countryNameService.countryValue = event.value;
  }
}
