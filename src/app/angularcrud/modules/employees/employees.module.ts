import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../shared/employee.service';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[EmployeeService]
})
export class EmployeesModule { }
