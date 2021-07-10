import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @Input() country: string = '';

  constructor() { 
    // this.country="spain";
  }

  ngOnInit(): void {
    console.log('*** country is ', this.country);  

        this.country="spain";

    console.log('*** country is ', this.country);  

  }


}
