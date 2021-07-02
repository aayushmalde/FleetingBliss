import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component'
import {RecordsService} from './records.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  text='app';

  records = [
    {
        "name": "test",
        "online": true
    },
    {
        "name": "ABC",
        "online": false
    },
    {
        "name": "123",
        "online": true
    }
  ]

}
