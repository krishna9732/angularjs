import { Component, Input,HostListener, Inject} from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(@Inject(MyserviceService)myserviceService){
    console.log(myserviceService);
    console.log("hi, this is a component");
  }
  @HostListener('click',['$event'])
  mousehover(event:Event)
  { 
    alert("hello");
  }
}
