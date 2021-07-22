import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercountryComponent } from './headercountry.component';

describe('HeadercountryComponent', () => {
  let component: HeadercountryComponent;
  let fixture: ComponentFixture<HeadercountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
