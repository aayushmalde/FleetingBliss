import { Component, Input, OnInit } from '@angular/core';
import { CountryValuesService } from '../country-values.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
   country: string = '';

  constructor(private mySecondService: CountryValuesService) { 
  }


  ngOnInit(){
    this.mySecondService.getCountryValueObs().subscribe(countryName => {
      this.country = countryName;
      console.log(countryName);
    })
    
  }

}
