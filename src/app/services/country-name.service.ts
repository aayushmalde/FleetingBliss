import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryNameService {
  countryName!: string;
  countryValueObs: Subject<string> = new Subject();

  constructor() {}

  set countryValue(val: string) {
    this.countryName = val;
    this.countryValueObs.next(this.countryName);
  }

  getCountryValueObs(): Observable<string> {
    return this.countryValueObs;
  }
}
