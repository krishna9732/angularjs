import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }
  title="using pipes"
  employees:any[]=[
    {
      code:'emp001',name:'Krishna',salary:20000,dob:'02/05/1990',mynumber:0.2567
    },
    {
      code:'emp002',name:'Vikash',salary:25000,dob:'12/05/1990',mynumber:0.3567
    },
    {
      code:'emp003',name:'Avinash',salary:30000,dob:'08/05/1990',mynumber:0.2547
    },
    {
      code:'emp004',name:'Sachin',salary:40000,dob:'4/25/1990',mynumber:0.2545
    },
    {
      code:'emp005',name:'Bipul',salary:35000,dob:'1/15/1990',mynumber:0.2267
    },
    {
      code:'emp006',name:'Abir',salary:27000,dob:'2/25/1990',mynumber:0.2525
    },
  ];
  ngOnInit(): void {
  }

}
