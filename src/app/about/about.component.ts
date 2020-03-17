import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked{

  constructor() {
    console.log("constructor called");
   }
  @Input() myvalue="dddddd"

  ngOnChanges(changes:SimpleChanges){
   // console.log("ngOnChanges called");
console.log("ngOnChanges Input value  = " + changes.myvalue.currentValue)
  }
  
  ngOnInit(): void {
    console.log("ngOnInit called");

  }

  ngDoCheck(){
    console.log("ngDocheck called")
  }
ngAfterContentInit(){
  console.log("ngAfterContentInit called")
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked called" )
}
ngAfterViewInit(){
  console.log("ngAfterViewInit called")
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called")
}

}
