import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

interface myData{
  obj: Object
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    //return this.http.get<myData>('http://localhost:1234/file.php')
    return of([
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
  ])
  
  }
}

