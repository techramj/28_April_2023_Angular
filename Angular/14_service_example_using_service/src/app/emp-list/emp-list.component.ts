import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees:Employee[] = [];

  constructor(private empService: EmployeeService){}

  ngOnInit(): void {
      this.loadEmployees();
  }

  loadEmployees(){
    this.empService.getEmployees().subscribe(data =>{
      this.employees = data;
      console.log(this.employees);
    });
  }

  deleteEmp(id:any){
    console.log('deleting employee with id='+id);
    this.empService.deleteEmployee(id).subscribe(data=>{
      this.loadEmployees();
    });
  }
}
