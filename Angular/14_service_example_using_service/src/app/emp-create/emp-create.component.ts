import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent {

  emp:{name:string, email:string, salary:number} = {name:'', email:'', salary:0};

  constructor(private empService: EmployeeService, private router:Router){}

  addEmployee(name:string, email:string, salary:string){
    this.empService.addEmployee({name,email,salary})
    .subscribe(date=>{
      this.router.navigateByUrl("/emp");
    });
  }

}
