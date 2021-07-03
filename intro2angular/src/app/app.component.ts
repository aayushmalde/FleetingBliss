import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component'
import {RecordsService} from './records.service'

export interface Record{name: string, online: boolean}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';
  text='app';

  records: Record[] = [];

  constructor(private myFirstService: RecordsService){

  }

  ngOnInit(){
    this.records = this.myFirstService.getData()
    
  }

}
