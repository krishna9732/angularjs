import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }
title="Using Forms"

Register(regForm:any){
  // debugger;
  // var firstname=regForm.controls.firstname.value;
  // var lastname=regForm.controls.lastname.value;
  // var email=regForm.controls.email.value;
  
  console.log(regForm)

}
  ngOnInit(): void {
  }

}
