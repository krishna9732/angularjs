import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  people:any[]=[
    {
    "name":"krishna",
    "country":"India"
  },
  {
    "name":"bikash",
    "country":"sikago"
  },
  {
    "name":"sachin",
    "country":"malysia"
  },
  {
    "name":"Avinash",
    "country":"US"
  }
];
getcolor(country){
  switch(country)
   {
    case 'India':
      return 'green';
    case 'US':
      return 'blue';
    case 'malysia':
      return 'yellow';
    case 'sikago':
      return "red"

  }
}

}
