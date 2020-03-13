import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // isvalid:boolean=true;
  // changevalue(valid){
  //   this.isvalid= valid;

  // }
public choose='';
setvalue(drp:any)
{
  this.choose=drp.target.value;
}
}
