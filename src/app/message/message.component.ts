import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers:[MessageService]
})
export class MessageComponent implements OnInit {

  title="Using SERVICE";

  text:string;
  emp:any[]

  constructor( private _messageservice:MessageService) { }

  ngOnInit(): void {
    this.emp=this._messageservice.employees;
    this.text=this._messageservice.display();
  }

}
