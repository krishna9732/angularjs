import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Employee } from 'src/app/angularcrud/model/employee.model';

const headeroption ={
  headers:new HttpHeaders({ 'Content-Type':'application/json'})
}

@Injectable()
export class EmployeeService {


  mockUrl='http://localhost:3000/Employee';

  currentEmployee: Employee ={
    firstname:'',
    Lastname:'',
    Email:'',
    id:null, 
    Mobile:null,
    Gender:''
  }


  constructor(
    private http:HttpClient
  ) { }


  getAllemployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.mockUrl,headeroption);
  }


  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.mockUrl + '/' + id,headeroption);
  }

  createEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.mockUrl,emp,headeroption)
  }

  updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.mockUrl + '/' +emp.id,emp,headeroption)
  }

}
   