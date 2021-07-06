import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { myRecord } from './app.component';
import { retry, catchError } from 'rxjs/operators';

export interface myData{
  obj: myRecord[]
}

@Injectable()
export class RecordsService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<myData> {
    const dataArr = [
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
    // return of({obj: dataArr});  
    return this.httpClient.get<myData>('http://localhost:1234/file.php').pipe(
      retry(1),
      catchError(this.handleError)
    )
    }

      // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //test
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
      //test2
      //test
    
}

