import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-userouting',
  templateUrl: './userouting.component.html',
  styleUrls: ['./userouting.component.scss']
})
export class UseroutingComponent implements OnInit {


  constructor(private router:Router){}
  pipes(){
    this.router.navigate(['/pipes']);
  }  
  custopipe(){
    this.router.navigate(['/custopipe']);
  }
  twowaybinding(){
    this.router.navigate(['./twowaybinding'])
  }
  test(){
    this.router.navigate(['./test'])
  }
  message(){
    this.router.navigate(['./message'])
  }
  atribinding(){
    this.router.navigate(['./atribinding'])
  }
  excel(){
    this.router.navigate(['./excel'])
  }
  grouping(){
    this.router.navigate(['./grouping'])
  }
  ngclassuse(){
    this.router.navigate(['./ngclassuse'])
  }
  ngstyle(){
    this.router.navigate(['./ngstyle'])
  }
  forms(){
    this.router.navigate(['./forms'])
  }
  rectforms(){
    this.router.navigate(['./rectforms'])
  }
  ngOnInit(): void {
  }

}
