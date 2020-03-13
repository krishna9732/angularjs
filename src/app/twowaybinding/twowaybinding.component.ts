import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }
title="Using two way data Binding"
Data:string="angular"
Data1:string='krishna'
  ngOnInit(): void {
  }

}
