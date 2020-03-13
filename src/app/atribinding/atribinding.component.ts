import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribinding',
  templateUrl: './atribinding.component.html',
  styleUrls: ['./atribinding.component.scss']
})
export class AtribindingComponent implements OnInit {

  constructor() { }
title="Atribute Binding"
  ngOnInit(): void {
  }

  cols:number=3;
  bdr:number=1;
  hgt:number=200;
  wdt:number=400;
}
