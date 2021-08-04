import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryNameService {
  countryName!: string;
  countryNameObs: Subject<string> = new Subject();

  constructor() {}

  set countryValue(val: string) {
    this.countryName = val;
    this.countryNameObs.next(this.countryName);
  }

  getCountryNameObs(): Observable<string> {
    return this.countryNameObs;
  }
}
