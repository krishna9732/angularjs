import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  // checkngIF=true;
  // btnclick()
  // {
  //   alert("WELCOME");
  // }
 value:string;
  submitValue(val){
        this.value= val.value;
  }


  ngOnInit(): void {
  }



}
