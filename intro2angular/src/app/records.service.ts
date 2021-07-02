import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

interface myData{
  obj: Object
}

@Injectable()
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
          name: "test",
          online: true
      },
      {
          name: "ABC",
          online: false
      },
      {
          name: "123",
          online: true
      },
     {
          name: "1234",
          online: true
      }
    ]
  
  }
}

