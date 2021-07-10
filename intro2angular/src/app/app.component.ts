import { Component } from '@angular/core';
import {RecordsService} from './records.service'

export interface myRecord{name: string, online: boolean}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';
  text='app';
  countryName = 'Portugal';

  records: myRecord[] = [];
  constructor(private myFirstService: RecordsService){

  }

  ngOnInit(){
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj;
    })
    
  }

}
