import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component'
import {RecordsService} from './records.service'

export interface myRecord{name: string, online: boolean}

// export interface myData{
//   obj: Object
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';
  text='app';

  records: myRecord[] = [];
  constructor(private myFirstService: RecordsService){

  }

  ngOnInit(){
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj;
    })
    
  }

}
