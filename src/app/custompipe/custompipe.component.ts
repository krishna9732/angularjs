import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.scss']
})
export class CustompipeComponent implements OnInit {

  gender: string

  constructor() { }
  title="Using CUSTOM  PIPE"
  employees:any[]=[
    {
      code:'001',name:'Krishna',gender:'male',salary:20000
  },
  {
    code:'002',name:'Sachin',gender:'male',salary:25000
},
{
  code:'003',name:'Sipra',gender:'female',salary:26000
},
{
  code:'004',name:'chondrarishna',gender:'female',salary:28000
},

]


  ngOnInit(): void {
  
  }
}
