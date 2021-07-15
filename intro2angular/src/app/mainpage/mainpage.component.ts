import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryValuesService } from '../country-values.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  country: string = '';
  countryName$: Observable<string> | undefined; // convention to use $ at end for observables
  displayedImage = 'assets/images/horse.jpg';

  constructor(private countryNameService: CountryValuesService) {}

  ngOnInit() {
    this.countryName$ = this.countryNameService.getCountryValueObs();
  }
}
