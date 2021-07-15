import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryValuesService } from '../country-values.service';

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

  //in future have Object called countries with values, so that way using the map in the html we can say map.get(countryName).currency
  map: Map<string, string> = new Map([
    ['Spain', 'spainvalue'],
    ['France', 'englandValue'],
  ]);

  constructor(private countryNameService: CountryValuesService) {}

  ngOnInit() {
    this.countryName$ = this.countryNameService.getCountryValueObs().pipe(
      tap((countryName) => {
        this.countryName = countryName;
      })
    );
  }

  getValue(countryName: string) {
    return this.map.get(countryName);
  }
}
