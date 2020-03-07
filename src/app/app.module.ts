import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import {MyserviceService} from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("hello, this is a module");
  }
 }
