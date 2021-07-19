import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { CountryValuesService } from '../country-values.service';
@Component({
  selector: 'app-navigation',
  template: `
    <div class="navigationbar">
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Europe</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            *ngFor="let country of countries"
            [value]="country"
            >{{ country }}</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Asia</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option class="dropdowncontent" value="Japan">Japan</mat-option>
          <mat-option class="dropdowncontent" value="South Korea"
            >South Korea</mat-option
          >
          <mat-option class="dropdowncontent" value="China">China</mat-option>
          <mat-option class="dropdowncontent" value="India">India</mat-option>
          <mat-option class="dropdowncontent" value="Singapore"
            >Singapore</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in Africa</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option class="dropdowncontent" value="Egypt">Egypt</mat-option>
          <mat-option class="dropdowncontent" value="Tanzania"
            >Tanzania</mat-option
          >
          <mat-option class="dropdowncontent" value="South Africa"
            >South Africa</mat-option
          >
          <mat-option class="dropdowncontent" value="Madagascar"
            >Madagascar</mat-option
          >
          <mat-option class="dropdowncontent" value="Morocco"
            >Morocco</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Popular in USA</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option class="dropdowncontent" value="New York City"
            >New York City</mat-option
          >
          <mat-option class="dropdowncontent" value="California"
            >California</mat-option
          >
          <mat-option class="dropdowncontent" value="Washington D.C."
            >Washington D.C.</mat-option
          >
          <mat-option class="dropdowncontent" value="Las Vegas, Nevada"
            >Las Vegas, Nevada</mat-option
          >
          <mat-option class="dropdowncontent" value="New Orleans, Louisianna"
            >New Orleans, Louisianna</mat-option
          >
          <mat-option class="dropdowncontent" value="Alaska">Alaska</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Natural Wonders</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option
            class="dropdowncontent"
            value="Great Barrier Reef, Australia"
            >Great Barrier Reef, Australia</mat-option
          >
          <mat-option
            class="dropdowncontent"
            value="Yellowstone National Park, Wyoming"
            >Yellowstone National Park, Wyoming</mat-option
          >
          <mat-option class="dropdowncontent" value="Mt. Everest, Nepal"
            >Mt. Everest, Nepal</mat-option
          >
          <mat-option class="dropdowncontent" value="Grand Canyon, Arizona"
            >Grand Canyon, Arizona</mat-option
          >
          <mat-option class="dropdowncontent" value="Niagra Falls, Canada"
            >Niagra Falls, Canada</mat-option
          >
          <mat-option class="dropdowncontent" value="Northern Lights, Norway"
            >Northern Lights, Norway</mat-option
          >
        </mat-select>
      </mat-form-field>
      <mat-form-field class="dropbtn">
        <mat-label class="label">Best Beaches</mat-label>
        <mat-select class="select" (selectionChange)="setCountry($event)">
          <mat-option class="dropdowncontent" value="Fiji">Fiji</mat-option>
          <mat-option class="dropdowncontent" value="Bora Bora"
            >Bora Bora</mat-option
          >
          <mat-option class="dropdowncontent" value="Maldives"
            >Maldives</mat-option
          >
          <mat-option class="dropdowncontent" value="Tahiti">Tahiti</mat-option>
          <mat-option class="dropdowncontent" value="Maui">Maui</mat-option>
          <mat-option class="dropdowncontent" value="Cancun">Cancun</mat-option>
          <mat-option class="dropdowncontent" value="Bahamas"
            >Bahamas</mat-option
          >
          <mat-option class="dropdowncontent" value="Amalfi Coast"
            >Amalfi Coast</mat-option
          >
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private countryNameService: CountryValuesService) {}
  countries = ['Spain', 'England', 'France'];
  ngOnInit(): void {
    // this.countries = Array.from(countryMap.keys());
  }

  setCountry(event: MatSelectChange) {
    this.countryNameService.countryValue = event.value;
    console.log(event.value);
  }
  selectedCountry = 'Spain';
}

// <div class="dropdown">
//         <button class="dropbtn">Top Cities</button>
//         <div class="dropdown-content">
//           <a href="#">Paris, France</a>
//           <a href="#">Rome, Italy</a>
//           <a href="#">Hong Kong, China</a>
//           <a href="#">Amsterdam, Netherlands</a>
//           <a href="#">Venice, Italy</a>
//           <a href="#">Tokyo, Japan</a>
//           <a href="#">Bangkok, Thailand</a>
//           <a href="#">Dubai, United Arab Emirates</a>
//           <a href="#">Istanbul, Turkey</a>
//           <a href="#">Prague, Czech Republic</a>
//         </div>
//       </div>
// <mat-option class="dropdowncontent" value="Spain">Spain</mat-option>
//           <mat-option class="dropdowncontent" value="England"
//             >England</mat-option
//           >
//           <mat-option class="dropdowncontent" value="France">France</mat-option>
//           <mat-option class="dropdowncontent" value="Italy">Italy</mat-option>
//           <mat-option class="dropdowncontent" value="Germany"
//             >Germany</mat-option
//           >
//           <mat-option class="dropdowncontent" value="Switzerland"
//             >Switzerland</mat-option
//           >
//           <mat-option class="dropdowncontent" value="Sweden">Sweden</mat-option>
