import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  title="Using Reactive Forms"
  signupForm:FormGroup;
  FristName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";




  constructor(private frmBuilder:FormBuilder) { 
    this.signupForm=frmBuilder.group({
      fname:new FormControl(),
      lname:new FormControl(),
      Emailid:new FormControl(),
      userpassword: new FormControl(),
    });
  }
  
  ngOnInit(): void {
  }
  PostData(signupForm: NgForm)
  {
  console.log(signupForm.controls)
  }

}
