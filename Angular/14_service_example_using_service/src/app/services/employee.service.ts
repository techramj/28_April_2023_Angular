import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  httpOption = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  getEmployees() : Observable<Employee>{
    return this.http.get<Employee>(this.url);
  }

  getEmployeeById(id:any) : Observable<Employee>{
    return this.http.get<Employee>(this.url+"/"+id);
  }

  deleteEmployee(id:any) : Observable<any>{
    return this.http.delete<any>(this.url+"/"+id);
  }

  addEmployee(emp:any): Observable<Employee>{
    return this.http.post<Employee>(this.url, JSON.stringify(emp), this.httpOption );
  }

  updateEmployee(id:any, emp:any): Observable<Employee>{
    return this.http.put<Employee>(this.url+"/"+id,
      JSON.stringify(emp), this.httpOption );
  }
}
