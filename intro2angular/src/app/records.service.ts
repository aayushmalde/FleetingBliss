import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { myRecord } from './app.component';

export interface myData{
  obj: myRecord[]
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<myData> {
    //  return this.http.get<myData>('http://localhost:1234/file.php')
    return of({
      "obj": [
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
      
      
    )
  }
}

