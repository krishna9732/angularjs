import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/angularcrud/model/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  allEmployee:Employee[]; 
  // msg:string
  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee(); 
  }
  getAllEmployee() {
    this.employeeService.getAllemployees ().subscribe(
      (data:Employee[]) => {
        this.allEmployee=data;
      });
  }


  deleteEmployee(id:number){
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (data:Employee)=>{
            this.getAllEmployee();
      });
  }


  edit(emp){
   this.employeeService.currentEmployee = Object.assign({},emp);
  }

}
