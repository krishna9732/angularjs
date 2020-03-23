import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import {MyserviceService} from './myservice.service';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { NgclassComponent } from './ngstyle/ngclass.component';
import { GroupingComponent } from './grouping/grouping.component';
import { NgclassuseComponent } from './ngclassuse/ngclassuse.component';
import { AtribindingComponent } from './atribinding/atribinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { MypipePipe } from './mypipe.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { UseroutingComponent } from './userouting/userouting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { from } from 'rxjs';
import { AngularcrudComponent } from './angularcrud/angularcrud.component';
import { EmployeesModule } from './angularcrud/modules/employees/employees.module';
import { EmployeeComponent } from './angularcrud/modules/employees/employee/employee.component';
import { EmployeelistComponent } from './angularcrud/modules/employees/employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    AboutComponent,
    TestComponent,
    NgclassComponent,
    GroupingComponent,
    NgclassuseComponent,
    AtribindingComponent,
    TwowaybindingComponent,
    PipesComponent,
    MypipePipe,
    CustompipeComponent,
    UseroutingComponent,
    PagenotfoundComponent,
    MessageComponent,
    FormsComponent,
    ReactiveformComponent,
    AngularcrudComponent,
    EmployeeComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesModule,
    HttpClientModule
    ], 
  providers: [MyserviceService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    // console.log("hello, this is a module");
  }
 }
