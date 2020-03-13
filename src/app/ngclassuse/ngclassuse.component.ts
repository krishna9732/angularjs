import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassuse',
  templateUrl: './ngclassuse.component.html',
  styleUrls: ['./ngclassuse.component.scss']
})
export class NgclassuseComponent implements OnInit {

  constructor() { }
  title="Using ngclass"

  ngOnInit(): void {
  }
  users=[
    'krishna',
    'Bikash',
    'Sachin',
    'Avinash'

  ];

  getcssclass(flag:String){
    let cssclass;
    if(flag=="mode")
    {
      cssclass={
        'one':true,
        'two':true
      }
    }else{
      cssclass={
        'one':true,
        'three':true
      }
    }
    return cssclass;
  }



}
