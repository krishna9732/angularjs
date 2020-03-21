import { Component, Input,HostListener, Inject} from '@angular/core';
// import {MyserviceService} from './myservice.service';
import {Router} from '@angular/router';
import { FormGroup,FormControl,FormBuilder,NgForm} from '@angular/forms';
import {MessageService} from './message.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  // constructor(@Inject(MyserviceService)myserviceService){
  //   console.log(myserviceService);
  //   console.log("hi, this is a component");
  // }
  // @HostListener('click',['$event'])
  // mousehover(event:Event)
  // { 
  //   alert("hello");
  // }


  constructor(private router:Router){}

  back(){
         this.router.navigate(['/Dashboard']);
  }
 
}
