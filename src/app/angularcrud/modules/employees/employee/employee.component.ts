import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgModule } from '@angular/core';
import { Employee } from 'src/app/angularcrud/model/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public get employeeService(): EmployeeService {
    return this._employeeService;
  }
  public set employeeService(value: EmployeeService) {
    this._employeeService = value;
  }



  constructor(
    private _employeeService: EmployeeService
  ) { }



  ngOnInit(): void {
  }

  createAndUpdate(currentEmployee:Employee){
    console.log(currentEmployee)
    if(currentEmployee.id!=null){
      console.log('update');
      this.updateEmployee(currentEmployee);
    }else{
      console.log('create');
      this.createEmployee(currentEmployee);
    }
  }

  createEmployee(emp:Employee){
      this.employeeService.createEmployee(emp).subscribe();
  }

  updateEmployee(emp:Employee){
    this.employeeService.updateEmployee(emp).subscribe();

  }

  clear(){
    this.employeeService.currentEmployee = {
      firstname:'',
      Lastname:'',
      Email:'',
      id:null, 
      Mobile:null,
      Gender:''
    }
  }

}
