import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  employees:any[];
  constructor() { 
    this.employees=[
      {
        empcode:'001',name:'Krishna',post:'Angular'
      },
      {
        empcode:'002',name:'Vikash',post:'Python'
      },
      {
        empcode:'003',name:'Avinash',post:'python'
      }
    ];
  }

  display()
  {
    return ' We inject dependencies like this =" private _messageservice:MessageService"';
  }
}
