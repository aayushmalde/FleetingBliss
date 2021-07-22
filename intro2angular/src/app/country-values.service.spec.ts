import { TestBed } from '@angular/core/testing';

import { CountryValuesService } from './country-values.service';

describe('CountryValuesService', () => {
  let service: CountryValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
