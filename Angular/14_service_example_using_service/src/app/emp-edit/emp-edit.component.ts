import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {

  id:any = '';
  emp:any = {};

  constructor(private route:ActivatedRoute,
    private empService:EmployeeService,
    private router:Router){}
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.empService.getEmployeeById(this.id)
      .subscribe(data=>{
        this.emp = data;
      });
  }


  updateEmployee(){
    this.empService.updateEmployee(this.id, this.emp)
    .subscribe(data=>{
      this.router.navigate(['/emp']);
    });
  }

}
