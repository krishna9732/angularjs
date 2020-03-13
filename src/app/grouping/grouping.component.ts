import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit {

  constructor() { }
  title="This is grouping ngFor example"
  countrydetails:any[]=[
    {
      'country':'India',
      'people':[
      {
        "name":"krishna jana"
      },
      {
        "name":"avinash singh"
      },
      {
        "name":"bikash sharma"
      }]
    },
    {
      'country':'UK',
      'people':[
      {
        "name":"Donald"
      },
      {
        "name":"Tips"
      },
      {
        "name":"sunny"
      }]
    }
  ]

  ngOnInit(): void {
  }

}
