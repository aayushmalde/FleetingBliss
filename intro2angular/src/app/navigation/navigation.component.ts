import { Component, OnInit } from '@angular/core';
import { CountryValuesService } from '../country-values.service';
@Component({
  selector: 'app-navigation',
  template: `
    <div class="navigationbar">
      <div class="dropdown">
        <button class="dropbtn">Popular in Europe</button>
        <div class="dropdown-content">
          <button (click)="setCountry('Spain')">Spain</button>
          <button (click)="setCountry('England')">England</button>
          <a href="#">France</a>
          <a href="#">Italy</a>
          <a href="#">Germany</a>
          <a href="#">Switzerland</a>
          <a href="#">Sweden</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Popular in Asia</button>
        <div class="dropdown-content">
          <a href="#">Japan</a>
          <a href="#">South Korea</a>
          <a href="#">China</a>
          <a href="#">India</a>
          <a href="#">Singapore</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Popular in Africa</button>
        <div class="dropdown-content">
          <a href="#">Cairo, Egypt</a>
          <a href="#">Tanzania</a>
          <a href="#">Cape Town, South Africa</a>
          <a href="#">Madagascar</a>
          <a href="#">Morocco</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Popular in USA</button>
        <div class="dropdown-content">
          <a href="#">New York City</a>
          <a href="#">California</a>
          <a href="#">Washington D.C.</a>
          <a href="#">Las Vegas, Nevada</a>
          <a href="#">New Orleans, Louisianna</a>
          <a href="#">Alaska</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">For Nature Lovers</button>
        <div class="dropdown-content">
          <a href="#">Mountain</a>
          <a href="#">Natural Parks</a>
          <a href="#">Ocean</a>
          <a href="#">Canyons</a>
          <a href="#">Volcanoes</a>
          <a href="#">Northern Lights</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Best Beaches</button>
        <div class="dropdown-content">
          <a href="#">Fiji</a>
          <a href="#">Bora Bora</a>
          <a href="#">Maldives</a>
          <a href="#">Tahiti</a>
          <a href="#">Maui</a>
          <a href="#">Cancun</a>
          <a href="#">Bahamas</a>
          <a href="#">Amalfi Coast</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Top Cities</button>
        <div class="dropdown-content">
          <a href="#">Paris, France</a>
          <a href="#">Rome, Italy</a>
          <a href="#">Hong Kong, China</a>
          <a href="#">Amsterdam, Netherlands</a>
          <a href="#">Venice, Italy</a>
          <a href="#">Tokyo, Japan</a>
          <a href="#">Bangkok, Thailand</a>
          <a href="#">Dubai, United Arab Emirates</a>
          <a href="#">Istanbul, Turkey</a>
          <a href="#">Prague, Czech Republic</a>
        </div>
      </div>

      <mat-label>Choose a country</mat-label>
      <select (change)="setCountry($event)">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>

      <h4>Basic mat-select</h4>
      <mat-form-field>
        <mat-label>Choose a country</mat-label>
        <mat-select (selecionChange)="setCountry($event)">
          <mat-option value="spain">Spain</mat-option>
          <mat-option value="england">England</mat-option>
          <mat-option value="france">France</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private countryNameService: CountryValuesService) {}

  ngOnInit(): void {}

  setCountry(event: any) {
    this.countryNameService.countryValue = event.target.value;
  }
  selectedCountry = 'Spain';
  countries = ['Spain', 'England', 'France'];
}

// {{ selectedCountry }}
// <h4>Basic mat-select</h4>
// <mat-form-field>
//   <mat-label>Choose a country</mat-label>
//   <mat-select [(ngModel)]="selectedCountry">
//     <mat-option (change)="onChangeSpain()">Spain</mat-option>
//     <mat-option (change)="onChangeEngland()">England</mat-option>
//     <mat-option (change)="onChangeFrance()">France</mat-option>
//     <mat-option (change)="setCountry('Germany')">Germany</mat-option>
//   </mat-select>
// </mat-form-field>

// <mat-label>Choose a country</mat-label>
//       <select (change)="selectChangeHandler($event)">
//         <option value="Monday">Monday</option>
//         <option value="Tuesday">Tuesday</option>
//         <option value="Wednesday">Wednesday</option>
//         <option value="Thursday">Thursday</option>
//         <option value="Friday">Friday</option>
//       </select>
//       <p>
//         <span>You selected: </span><b>{{ selectedDay }}</b>
//       </p>
